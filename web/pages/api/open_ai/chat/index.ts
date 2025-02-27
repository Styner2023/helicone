import { NextApiRequest, NextApiResponse } from "next";

import OpenAI from "openai";
import {
  ChatCompletion,
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from "openai/resources/chat";
import { DEMO_EMAIL } from "../../../../lib/constants";
import { Result } from "../../../../lib/result";
import { SupabaseServerWrapper } from "../../../../lib/wrappers/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<ChatCompletion, string>>
) {
  const client = new SupabaseServerWrapper({ req, res }).getClient();
  const user = await client.auth.getUser();
  const { messages, requestId, temperature, model, maxTokens, tools } =
    req.body as {
      messages: ChatCompletionMessageParam[];
      requestId: string;
      temperature: number;
      model: string;
      maxTokens: number;
      tools: ChatCompletionTool[];
    };

  if (!temperature || !model) {
    res.status(400).json({
      error: "Bad request - missing required body parameters",
      data: null,
    });
    return;
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://oai.hconeai.com/v1",
    defaultHeaders: {
      "OpenAI-Organization": "",
      "Helicone-Property-Tag": "experiment",
      "Helicone-Auth": `Bearer ${process.env.TEST_HELICONE_API_KEY}`,
      user: user.data.user?.id || "",
      "Helicone-Property-RequestId": requestId,
    },
  });

  if (!user.data || !user.data.user) {
    res.status(401).json({ error: "Unauthorized", data: null });
    return;
  }
  if (user.data.user.email === DEMO_EMAIL) {
    res.status(401).json({ error: "Unauthorized", data: null });
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: model,
      messages: messages,
      user: user.data.user.email,
      temperature: temperature,
      max_tokens: maxTokens,
      tools: tools,
    });
    res.status(200).json({ error: null, data: completion });
    return;
  } catch (err) {
    res.status(500).json({ error: `${err}`, data: null });
    return;
  }
}
