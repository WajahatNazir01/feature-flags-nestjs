export interface SDKConfig {
  apiKey: string;
  apiHost?: string;       // Default fallback: http://localhost:3000
  streamingHost?: string; // Default fallback: http://localhost:3005
}

export interface FlagEvaluationResponse {
  key: string;
  isEnabled: boolean;
}

export interface StreamUpdatePayload {
  key: string;
  isEnabled: boolean;
}

export type FlagUpdateCallback = (key: string, isEnabled: boolean) => void;