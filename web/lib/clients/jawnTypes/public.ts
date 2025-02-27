type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
interface JsonArray extends Array<JsonValue> {}
interface JsonObject { [key: string]: JsonValue; }

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/user/query": {
    post: operations["GetUsers"];
  };
  "/v1/request/query": {
    post: operations["GetRequests"];
  };
  "/v1/request/{requestId}/feedback": {
    post: operations["FeedbackRequest"];
  };
  "/v1/request/{requestId}/property": {
    put: operations["PutProperty"];
  };
  "/v1/request/{requestId}/assets/{assetId}": {
    post: operations["GetRequestAssetById"];
  };
  "/v1/request/{requestId}/score": {
    post: operations["AddScores"];
  };
  "/v1/prompt/query": {
    post: operations["GetPrompts"];
  };
  "/v1/prompt/{promptId}/query": {
    post: operations["GetPrompt"];
  };
  "/v1/prompt/{promptId}": {
    delete: operations["DeletePrompt"];
  };
  "/v1/prompt/version/{promptVersionId}/subversion": {
    post: operations["CreateSubversion"];
  };
  "/v1/prompt/version/{promptVersionId}/inputs/query": {
    post: operations["GetInputs"];
  };
  "/v1/prompt/{promptId}/versions/query": {
    post: operations["GetPromptVersions"];
  };
  "/v1/experiment/dataset": {
    post: operations["AddDataset"];
  };
  "/v1/experiment/dataset/random": {
    post: operations["AddRandomDataset"];
  };
  "/v1/experiment/dataset/query": {
    post: operations["GetDatasets"];
  };
  "/v1/experiment/dataset/{datasetId}/query": {
    post: operations["GetDataset"];
  };
  "/v1/experiment/dataset/{datasetId}/mutate": {
    post: operations["MutateDataset"];
  };
  "/v1/experiment": {
    post: operations["CreateNewExperiment"];
  };
  "/v1/experiment/query": {
    post: operations["GetExperiments"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    "ResultSuccess__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array_": {
      data: {
          /** Format: double */
          cost_usd: number;
          user_id: string;
          /** Format: double */
          completion_tokens: number;
          /** Format: double */
          prompt_tokens: number;
          /** Format: double */
          count: number;
        }[];
      /** @enum {number|null} */
      error: null;
    };
    ResultError_string_: {
      /** @enum {number|null} */
      data: null;
      error: string;
    };
    "Result__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array.string_": components["schemas"]["ResultSuccess__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array_"] | components["schemas"]["ResultError_string_"];
    UserQueryParams: {
      userIds?: string[];
      timeFilter?: {
        /** Format: double */
        endTimeUnixSeconds: number;
        /** Format: double */
        startTimeUnixSeconds: number;
      };
    };
Json: JsonObject;
    /** @enum {string} */
    Provider: "OPENAI" | "ANTHROPIC" | "TOGETHERAI" | "GROQ" | "GOOGLE" | "CUSTOM";
    /** @enum {string} */
    LlmType: "chat" | "completion";
    FunctionCall: {
      name?: string;
      arguments?: Record<string, never>;
    };
    Message: {
      role?: string;
      content?: string;
      function_call?: components["schemas"]["FunctionCall"];
    };
    Request: {
      llm_type?: components["schemas"]["LlmType"];
      model?: string;
      provider?: string;
      prompt?: string | null;
      /** Format: double */
      max_tokens?: number | null;
      /** Format: double */
      temperature?: number | null;
      /** Format: double */
      top_p?: number | null;
      /** Format: double */
      n?: number | null;
      stream?: boolean | null;
      stop?: string | null;
      /** Format: double */
      presence_penalty?: number | null;
      /** Format: double */
      frequency_penalty?: number | null;
      /** Format: double */
      logprobs?: number | null;
      /** Format: double */
      best_of?: number | null;
      logit_bias?: Record<string, unknown> | null;
      user?: string | null;
      messages?: components["schemas"]["Message"][] | null;
      tooLarge?: boolean;
      heliconeMessage?: string;
    };
    /** @description Construct a type with a set of properties K of type T */
    "Record_number.string_": {
      [key: string]: string;
    };
    ErrorInfo: {
      code?: string | null;
      message?: string | null;
    };
    Response: {
      completions?: components["schemas"]["Record_number.string_"] | null;
      message?: components["schemas"]["Message"] | null;
      error?: components["schemas"]["ErrorInfo"] | null;
      model?: string | null;
      tooLarge?: boolean;
      heliconeMessage?: string;
    };
    LlmSchema: {
      request: components["schemas"]["Request"];
      response?: components["schemas"]["Response"] | null;
    };
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.string_": {
      [key: string]: string;
    };
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.number_": {
      [key: string]: number;
    };
    HeliconeRequest: {
      /** @example Happy */
      response_id: string;
      response_created_at: string;
      response_body?: unknown;
      /** Format: double */
      response_status: number;
      response_model: string | null;
      request_id: string;
      request_model: string | null;
      model_override: string | null;
      request_created_at: string;
      request_body: unknown;
      request_path: string;
      request_user_id: string | null;
      request_properties: {
        [key: string]: components["schemas"]["Json"];
      } | null;
      request_feedback: {
        [key: string]: components["schemas"]["Json"];
      } | null;
      helicone_user: string | null;
      prompt_name: string | null;
      prompt_regex: string | null;
      key_name: string;
      /** Format: double */
      delay_ms: number | null;
      /** Format: double */
      time_to_first_token: number | null;
      /** Format: double */
      total_tokens: number | null;
      /** Format: double */
      prompt_tokens: number | null;
      /** Format: double */
      completion_tokens: number | null;
      provider: components["schemas"]["Provider"];
      node_id: string | null;
      prompt_id: string | null;
      feedback_created_at?: string | null;
      feedback_id?: string | null;
      feedback_rating?: boolean | null;
      signed_body_url?: string | null;
      llmSchema: components["schemas"]["LlmSchema"] | null;
      country_code: string | null;
      asset_ids: string[] | null;
      asset_urls: components["schemas"]["Record_string.string_"] | null;
      scores: components["schemas"]["Record_string.number_"] | null;
      /** Format: double */
      costUSD?: number | null;
    };
    "ResultSuccess_HeliconeRequest-Array_": {
      data: components["schemas"]["HeliconeRequest"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_HeliconeRequest-Array.string_": components["schemas"]["ResultSuccess_HeliconeRequest-Array_"] | components["schemas"]["ResultError_string_"];
    /** @description Make all properties in T optional */
    Partial_NumberOperators_: {
      /** Format: double */
      "not-equals"?: number;
      /** Format: double */
      equals?: number;
      /** Format: double */
      gte?: number;
      /** Format: double */
      lte?: number;
      /** Format: double */
      lt?: number;
      /** Format: double */
      gt?: number;
    };
    /** @description Make all properties in T optional */
    Partial_TimestampOperators_: {
      gte?: string;
      lte?: string;
      lt?: string;
      gt?: string;
    };
    /** @description Make all properties in T optional */
    Partial_BooleanOperators_: {
      equals?: boolean;
    };
    /** @description Make all properties in T optional */
    Partial_TextOperators_: {
      "not-equals"?: string;
      equals?: string;
      like?: string;
      ilike?: string;
      contains?: string;
      "not-contains"?: string;
    };
    /** @description Make all properties in T optional */
    Partial_FeedbackTableToOperators_: {
      id?: components["schemas"]["Partial_NumberOperators_"];
      created_at?: components["schemas"]["Partial_TimestampOperators_"];
      rating?: components["schemas"]["Partial_BooleanOperators_"];
      response_id?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description Make all properties in T optional */
    Partial_RequestTableToOperators_: {
      prompt?: components["schemas"]["Partial_TextOperators_"];
      created_at?: components["schemas"]["Partial_TimestampOperators_"];
      user_id?: components["schemas"]["Partial_TextOperators_"];
      auth_hash?: components["schemas"]["Partial_TextOperators_"];
      org_id?: components["schemas"]["Partial_TextOperators_"];
      id?: components["schemas"]["Partial_TextOperators_"];
      node_id?: components["schemas"]["Partial_TextOperators_"];
      model?: components["schemas"]["Partial_TextOperators_"];
      modelOverride?: components["schemas"]["Partial_TextOperators_"];
      path?: components["schemas"]["Partial_TextOperators_"];
      prompt_id?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description Make all properties in T optional */
    Partial_ResponseTableToOperators_: {
      body_tokens?: components["schemas"]["Partial_NumberOperators_"];
      body_model?: components["schemas"]["Partial_TextOperators_"];
      body_completion?: components["schemas"]["Partial_TextOperators_"];
      status?: components["schemas"]["Partial_NumberOperators_"];
      model?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.feedback-or-request-or-response-or-properties-or-values_": {
      feedback?: components["schemas"]["Partial_FeedbackTableToOperators_"];
      request?: components["schemas"]["Partial_RequestTableToOperators_"];
      response?: components["schemas"]["Partial_ResponseTableToOperators_"];
      properties?: {
        [key: string]: components["schemas"]["Partial_TextOperators_"];
      };
      values?: {
        [key: string]: components["schemas"]["Partial_TextOperators_"];
      };
    };
    "FilterLeafSubset_feedback-or-request-or-response-or-properties-or-values_": components["schemas"]["Pick_FilterLeaf.feedback-or-request-or-response-or-properties-or-values_"];
    RequestFilterNode: components["schemas"]["FilterLeafSubset_feedback-or-request-or-response-or-properties-or-values_"] | components["schemas"]["RequestFilterBranch"] | "all";
    RequestFilterBranch: {
      right: components["schemas"]["RequestFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["RequestFilterNode"];
    };
    /** @enum {string} */
    SortDirection: "asc" | "desc";
    SortLeafRequest: {
      /** @enum {boolean} */
      random?: true;
      created_at?: components["schemas"]["SortDirection"];
      cache_created_at?: components["schemas"]["SortDirection"];
      latency?: components["schemas"]["SortDirection"];
      last_active?: components["schemas"]["SortDirection"];
      total_tokens?: components["schemas"]["SortDirection"];
      completion_tokens?: components["schemas"]["SortDirection"];
      prompt_tokens?: components["schemas"]["SortDirection"];
      user_id?: components["schemas"]["SortDirection"];
      body_model?: components["schemas"]["SortDirection"];
      is_cached?: components["schemas"]["SortDirection"];
      request_prompt?: components["schemas"]["SortDirection"];
      response_text?: components["schemas"]["SortDirection"];
      properties?: {
        [key: string]: components["schemas"]["SortDirection"];
      };
      values?: {
        [key: string]: components["schemas"]["SortDirection"];
      };
    };
    RequestQueryParams: {
      filter: components["schemas"]["RequestFilterNode"];
      /** Format: double */
      offset?: number;
      /** Format: double */
      limit?: number;
      sort?: components["schemas"]["SortLeafRequest"];
      isCached?: boolean;
      includeInputs?: boolean;
    };
    ResultSuccess_null_: {
      /** @enum {number|null} */
      data: null;
      /** @enum {number|null} */
      error: null;
    };
    "Result_null.string_": components["schemas"]["ResultSuccess_null_"] | components["schemas"]["ResultError_string_"];
    HeliconeRequestAsset: {
      assetUrl: string;
    };
    ResultSuccess_HeliconeRequestAsset_: {
      data: components["schemas"]["HeliconeRequestAsset"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_HeliconeRequestAsset.string_": components["schemas"]["ResultSuccess_HeliconeRequestAsset_"] | components["schemas"]["ResultError_string_"];
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.number-or-boolean_": {
      [key: string]: number | boolean;
    };
    Scores: components["schemas"]["Record_string.number-or-boolean_"];
    ScoreRequest: {
      scores: components["schemas"]["Scores"];
    };
    PromptsResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      created_at: string;
      /** Format: double */
      major_version: number;
    };
    "ResultSuccess_PromptsResult-Array_": {
      data: components["schemas"]["PromptsResult"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptsResult-Array.string_": components["schemas"]["ResultSuccess_PromptsResult-Array_"] | components["schemas"]["ResultError_string_"];
    /** @description Make all properties in T optional */
    Partial_PromptToOperators_: {
      id?: components["schemas"]["Partial_TextOperators_"];
      user_defined_id?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.prompt_v2_": {
      prompt_v2?: components["schemas"]["Partial_PromptToOperators_"];
    };
    FilterLeafSubset_prompt_v2_: components["schemas"]["Pick_FilterLeaf.prompt_v2_"];
    PromptsFilterNode: components["schemas"]["FilterLeafSubset_prompt_v2_"] | components["schemas"]["PromptsFilterBranch"] | "all";
    PromptsFilterBranch: {
      right: components["schemas"]["PromptsFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["PromptsFilterNode"];
    };
    PromptsQueryParams: {
      filter: components["schemas"]["PromptsFilterNode"];
    };
    PromptResult: {
      id: string;
      user_defined_id: string;
      description: string;
      pretty_name: string;
      /** Format: double */
      major_version: number;
      latest_version_id: string;
      latest_model_used: string;
      created_at: string;
      last_used: string;
      versions: string[];
    };
    ResultSuccess_PromptResult_: {
      data: components["schemas"]["PromptResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptResult.string_": components["schemas"]["ResultSuccess_PromptResult_"] | components["schemas"]["ResultError_string_"];
    PromptQueryParams: {
      timeFilter: {
        end: string;
        start: string;
      };
    };
    PromptVersionResult: {
      id: string;
      /** Format: double */
      minor_version: number;
      /** Format: double */
      major_version: number;
      helicone_template: string;
      prompt_v2: string;
      model: string;
    };
    ResultSuccess_PromptVersionResult_: {
      data: components["schemas"]["PromptVersionResult"];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult.string_": components["schemas"]["ResultSuccess_PromptVersionResult_"] | components["schemas"]["ResultError_string_"];
    PromptCreateSubversionParams: {
      newHeliconeTemplate: unknown;
    };
    PromptInputRecord: {
      id: string;
      inputs: components["schemas"]["Record_string.string_"];
      source_request: string;
      prompt_version: string;
      created_at: string;
      response_body: string;
    };
    "ResultSuccess_PromptInputRecord-Array_": {
      data: components["schemas"]["PromptInputRecord"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptInputRecord-Array.string_": components["schemas"]["ResultSuccess_PromptInputRecord-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess_PromptVersionResult-Array_": {
      data: components["schemas"]["PromptVersionResult"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_PromptVersionResult-Array.string_": components["schemas"]["ResultSuccess_PromptVersionResult-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess__datasetId-string__": {
      data: {
        datasetId: string;
      };
      /** @enum {number|null} */
      error: null;
    };
    "Result__datasetId-string_.string_": components["schemas"]["ResultSuccess__datasetId-string__"] | components["schemas"]["ResultError_string_"];
    DatasetMetadata: {
      promptId?: string;
      inputRecordsIds?: string[];
    };
    NewDatasetParams: {
      datasetName: string;
      requestIds: string[];
      meta?: components["schemas"]["DatasetMetadata"];
    };
    /** @description Make all properties in T optional */
    Partial_PromptVersionsToOperators_: {
      minor_version?: components["schemas"]["Partial_NumberOperators_"];
      major_version?: components["schemas"]["Partial_NumberOperators_"];
      id?: components["schemas"]["Partial_TextOperators_"];
      prompt_v2?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.request-or-prompts_versions_": {
      request?: components["schemas"]["Partial_RequestTableToOperators_"];
      prompts_versions?: components["schemas"]["Partial_PromptVersionsToOperators_"];
    };
    "FilterLeafSubset_request-or-prompts_versions_": components["schemas"]["Pick_FilterLeaf.request-or-prompts_versions_"];
    DatasetFilterNode: components["schemas"]["FilterLeafSubset_request-or-prompts_versions_"] | components["schemas"]["DatasetFilterBranch"] | "all";
    DatasetFilterBranch: {
      right: components["schemas"]["DatasetFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["DatasetFilterNode"];
    };
    RandomDatasetParams: {
      datasetName: string;
      filter: components["schemas"]["DatasetFilterNode"];
      /** Format: double */
      offset?: number;
      /** Format: double */
      limit?: number;
    };
    DatasetResult: {
      id: string;
      name: string;
      created_at: string;
      meta?: components["schemas"]["DatasetMetadata"];
    };
    "ResultSuccess_DatasetResult-Array_": {
      data: components["schemas"]["DatasetResult"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_DatasetResult-Array.string_": components["schemas"]["ResultSuccess_DatasetResult-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess___-Array_": {
      data: Record<string, never>[];
      /** @enum {number|null} */
      error: null;
    };
    "Result___-Array.string_": components["schemas"]["ResultSuccess___-Array_"] | components["schemas"]["ResultError_string_"];
    "ResultSuccess__experimentId-string__": {
      data: {
        experimentId: string;
      };
      /** @enum {number|null} */
      error: null;
    };
    "Result__experimentId-string_.string_": components["schemas"]["ResultSuccess__experimentId-string__"] | components["schemas"]["ResultError_string_"];
    NewExperimentParams: {
      datasetId: string;
      promptVersion: string;
      model: string;
      providerKeyId: string;
      meta?: unknown;
    };
    ResponseObj: {
      body: unknown;
      createdAt: string;
      /** Format: double */
      completionTokens: number;
      /** Format: double */
      promptTokens: number;
      /** Format: double */
      delayMs: number;
      model: string;
    };
    RequestObj: {
      id: string;
      provider: string;
    };
    ScoreValue: string | number;
    /** @description Construct a type with a set of properties K of type T */
    "Record_string.ScoreValue_": {
      [key: string]: components["schemas"]["ScoreValue"];
    };
    ExperimentScores: {
      dataset: {
        scores: components["schemas"]["Record_string.ScoreValue_"];
      };
      hypothesis: {
        scores: components["schemas"]["Record_string.ScoreValue_"];
      };
    };
    Experiment: {
      id: string;
      organization: string;
      dataset: {
        rows: {
            scores: components["schemas"]["Record_string.number_"];
            inputRecord?: {
              request: components["schemas"]["RequestObj"];
              response: components["schemas"]["ResponseObj"];
              inputs: components["schemas"]["Record_string.string_"];
              requestPath: string;
              requestId: string;
            };
            rowId: string;
          }[];
        name: string;
        id: string;
      };
      meta: unknown;
      createdAt: string;
      hypotheses: {
          runs: {
              request?: components["schemas"]["RequestObj"];
              scores: components["schemas"]["Record_string.number_"];
              response?: components["schemas"]["ResponseObj"];
              resultRequestId: string;
              datasetRowId: string;
            }[];
          providerKey: string;
          createdAt: string;
          status: string;
          model: string;
          parentPromptVersion?: {
            template: unknown;
          };
          promptVersion?: {
            template: unknown;
          };
          promptVersionId: string;
          id: string;
        }[];
      scores: components["schemas"]["ExperimentScores"] | null;
    };
    "ResultSuccess_Experiment-Array_": {
      data: components["schemas"]["Experiment"][];
      /** @enum {number|null} */
      error: null;
    };
    "Result_Experiment-Array.string_": components["schemas"]["ResultSuccess_Experiment-Array_"] | components["schemas"]["ResultError_string_"];
    /** @description Make all properties in T optional */
    Partial_ExperimentToOperators_: {
      id?: components["schemas"]["Partial_TextOperators_"];
      prompt_v2?: components["schemas"]["Partial_TextOperators_"];
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_FilterLeaf.experiment_": {
      experiment?: components["schemas"]["Partial_ExperimentToOperators_"];
    };
    FilterLeafSubset_experiment_: components["schemas"]["Pick_FilterLeaf.experiment_"];
    ExperimentFilterNode: components["schemas"]["FilterLeafSubset_experiment_"] | components["schemas"]["ExperimentFilterBranch"] | "all";
    ExperimentFilterBranch: {
      right: components["schemas"]["ExperimentFilterNode"];
      /** @enum {string} */
      operator: "or" | "and";
      left: components["schemas"]["ExperimentFilterNode"];
    };
    IncludeExperimentKeys: {
      /** @enum {boolean} */
      inputs?: true;
      /** @enum {boolean} */
      promptVersion?: true;
      /** @enum {boolean} */
      responseBodies?: true;
      /** @enum {boolean} */
      score?: true;
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetUsers: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array.string_"];
        };
      };
    };
  };
  GetRequests: {
    /** @description Request query filters */
    requestBody: {
      content: {
        /**
         * @example {
         *   "filter": "all",
         *   "isCached": false,
         *   "limit": 10,
         *   "offset": 0,
         *   "sort": {
         *     "created_at": "desc"
         *   }
         * }
         */
        "application/json": components["schemas"]["RequestQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_HeliconeRequest-Array.string_"];
        };
      };
    };
  };
  FeedbackRequest: {
    parameters: {
      path: {
        requestId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          rating: boolean;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  PutProperty: {
    parameters: {
      path: {
        requestId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          value: string;
          key: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  GetRequestAssetById: {
    parameters: {
      path: {
        requestId: string;
        assetId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_HeliconeRequestAsset.string_"];
        };
      };
    };
  };
  AddScores: {
    parameters: {
      path: {
        requestId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ScoreRequest"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_null.string_"];
        };
      };
    };
  };
  GetPrompts: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptsQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptsResult-Array.string_"];
        };
      };
    };
  };
  GetPrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptQueryParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptResult.string_"];
        };
      };
    };
  };
  DeletePrompt: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  CreateSubversion: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PromptCreateSubversionParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult.string_"];
        };
      };
    };
  };
  GetInputs: {
    parameters: {
      path: {
        promptVersionId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          random?: boolean;
          /** Format: double */
          limit: number;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptInputRecord-Array.string_"];
        };
      };
    };
  };
  GetPromptVersions: {
    parameters: {
      path: {
        promptId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_PromptVersionResult-Array.string_"];
        };
      };
    };
  };
  AddDataset: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewDatasetParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result__datasetId-string_.string_"];
        };
      };
    };
  };
  AddRandomDataset: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RandomDatasetParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result__datasetId-string_.string_"];
        };
      };
    };
  };
  GetDatasets: {
    requestBody: {
      content: {
        "application/json": {
          promptId?: string;
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_DatasetResult-Array.string_"];
        };
      };
    };
  };
  GetDataset: {
    requestBody: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result___-Array.string_"];
        };
      };
    };
  };
  MutateDataset: {
    requestBody: {
      content: {
        "application/json": {
          removeRequests: string[];
          addRequests: string[];
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result___-Array.string_"];
        };
      };
    };
  };
  CreateNewExperiment: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewExperimentParams"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result__experimentId-string_.string_"];
        };
      };
    };
  };
  GetExperiments: {
    requestBody: {
      content: {
        "application/json": {
          include?: components["schemas"]["IncludeExperimentKeys"];
          filter: components["schemas"]["ExperimentFilterNode"];
        };
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Result_Experiment-Array.string_"];
        };
      };
    };
  };
}
