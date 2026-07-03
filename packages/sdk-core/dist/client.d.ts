import { SDKConfig, FlagUpdateCallback } from './types';
export declare class FeatureFlagsClient {
    private apiKey;
    private apiHost;
    private streamingHost;
    private socket;
    private flagsCache;
    private isInitialized;
    private onUpdateCallback?;
    constructor(config: SDKConfig);
    /**
     * Initializes the SDK context by pulling the target flags and connecting to the streaming service.
     * @param tenantId The unique workspace ID of the tenant.
     */
    init(tenantId: string): Promise<void>;
    /**
     * Sets up the WebSocket layer to listen for instant admin switches.
     */
    private initializeStream;
    /**
     * Synchronously checks if a specific feature flag is turned on.
     * @param key The unique string identifier of the flag (e.g. 'maintenance-mode').
     * @param fallback The default return value if the flag does not exist in the cache.
     */
    isEnabled(key: string, fallback?: boolean): boolean;
    /**
     * Registers a listener to run custom application code whenever an admin toggles a flag.
     */
    onUpdate(callback: FlagUpdateCallback): void;
    /**
     * Disconnects the socket when the server or application shuts down.
     */
    close(): void;
}
