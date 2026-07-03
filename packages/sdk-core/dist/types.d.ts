export interface SDKConfig {
    apiKey: string;
    apiHost?: string;
    streamingHost?: string;
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
