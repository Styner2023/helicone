import { PromiseGenericResult, ok, err } from "../lib/shared/result";
import {
  getTokenCountAnthropic,
  getTokenCountGPT3,
} from "../lib/tokens/tokenCounter";
import { Provider } from "../models/models";
import crypto from "crypto";
import zlib from "zlib";

export function tryParse(text: string, errorMsg?: string): any {
  try {
    return JSON.parse(text);
  } catch (e) {
    return {
      error: `Error parsing ${errorMsg}, ${e}, ${text}`,
    };
  }
}

export async function getTokenCount(
  inputText: string,
  model: string | undefined,
  provider: Provider
): Promise<number> {
  if (!inputText) return 0;
  
  if (provider === "OPENAI" || (provider == "OPENROUTER" && model?.includes("openai"))) {
    return await getTokenCountGPT3(inputText);
  } else if (provider === "ANTHROPIC" || (provider == "OPENROUTER" && model?.includes("anthropic"))) {
    return await getTokenCountAnthropic(inputText);
  } else {
    return 0;
  }
}

export function deepCompare(a: any, b: any): boolean {
  if (a === b) return true;

  if (a && b && typeof a === "object" && typeof b === "object") {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
      if (!deepCompare(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}

export function stringToNumberHash(str: string): number {
  const hash = crypto.createHash("sha256");
  hash.update(str);

  const hexHash = hash.digest("hex");

  const integer = parseInt(hexHash.substring(0, 16), 16);

  return integer;
}

export async function compressData(
  value: string
): PromiseGenericResult<Buffer> {
  const buffer = Buffer.from(value, "utf-8");
  return new Promise((resolve, reject) => {
    zlib.gzip(buffer, (error, result) => {
      if (error) {
        console.error(`Failed to compress value: ${error}`);
        resolve(err("Failed to compress value"));
      }
      resolve(ok(result));
    });
  });
}

// Replaces all the image_url that is not a url or not { url: url }  with
// { unsupported_image: true }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unsupportedImage(body: any): any {
  if (typeof body !== "object" || body === null) {
    return body;
  }
  if (Array.isArray(body)) {
    return body.map((item) => unsupportedImage(item));
  }
  const notSupportMessage = {
    helicone_message:
      "Storing images as bytes is currently not supported within Helicone.",
  };
  if (body["image_url"] !== undefined) {
    const imageUrl = body["image_url"];
    if (
      typeof imageUrl === "string" &&
      !imageUrl.startsWith("http") &&
      !imageUrl.startsWith("<helicone-asset-id")
    ) {
      body.image_url = notSupportMessage;
    }
    if (
      typeof imageUrl === "object" &&
      imageUrl.url !== undefined &&
      typeof imageUrl.url === "string" &&
      !imageUrl.url.startsWith("http") &&
      !imageUrl.url.startsWith("<helicone-asset-id")
    ) {
      body.image_url = notSupportMessage;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  for (const key in body) {
    result[key] = unsupportedImage(body[key]);
  }
  return result;
}
