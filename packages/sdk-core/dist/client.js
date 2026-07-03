"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlagsClient = void 0;
const socket_io_client_1 = require("socket.io-client");
class FeatureFlagsClient {
    constructor(config) {
        this.socket = null;
        this.flagsCache = new Map();
        this.isInitialized = false;
        this.apiKey = config.apiKey;
        this.apiHost = config.apiHost || 'http://localhost:3000';
        this.streamingHost = config.streamingHost || 'http://localhost:3005';
    }
    /**
     * Initializes the SDK context by pulling the target flags and connecting to the streaming service.
     * @param tenantId The unique workspace ID of the tenant.
     */
    async init(tenantId) {
        if (this.isInitialized)
            return;
        try {
            console.log('🔄 [SDK] Initializing feature flags stream connection...');
            // Establish background real-time sync channel
            this.initializeStream(tenantId);
            this.isInitialized = true;
            console.log('✅ [SDK] Initialization complete.');
        }
        catch (error) {
            console.error('❌ [SDK] Initialization failed:', error.message);
        }
    }
    /**
     * Sets up the WebSocket layer to listen for instant admin switches.
     */
    initializeStream(tenantId) {
        this.socket = (0, socket_io_client_1.io)(this.streamingHost, {
            query: { tenantId },
            transports: ['websocket'], // Forces clean WebSockets protocol connection
        });
        this.socket.on('connect', () => {
            console.log(`🔌 [SDK] Connected to real-time synchronization highway. (ID: ${this.socket?.id})`);
        });
        // Capture incoming Redis event broadcasts forwarded by the streaming server
        this.socket.on('flagUpdated', (data) => {
            this.flagsCache.set(data.key, data.isEnabled);
            console.log(`📡 [SDK Cache Auto-Sync]: "${data.key}" updated to -> ${data.isEnabled}`);
            // Trigger user-defined callback if registered
            if (this.onUpdateCallback) {
                this.onUpdateCallback(data.key, data.isEnabled);
            }
        });
        this.socket.on('disconnect', () => {
            console.warn('⚠️ [SDK] Disconnected from streaming engine highway.');
        });
    }
    /**
     * Synchronously checks if a specific feature flag is turned on.
     * @param key The unique string identifier of the flag (e.g. 'maintenance-mode').
     * @param fallback The default return value if the flag does not exist in the cache.
     */
    isEnabled(key, fallback = false) {
        if (!this.isInitialized) {
            console.warn(`⚠️ [SDK] "isEnabled('${key}')" called before init(). Returning fallback value.`);
            return fallback;
        }
        return this.flagsCache.has(key) ? this.flagsCache.get(key) : fallback;
    }
    /**
     * Registers a listener to run custom application code whenever an admin toggles a flag.
     */
    onUpdate(callback) {
        this.onUpdateCallback = callback;
    }
    /**
     * Disconnects the socket when the server or application shuts down.
     */
    close() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}
exports.FeatureFlagsClient = FeatureFlagsClient;
