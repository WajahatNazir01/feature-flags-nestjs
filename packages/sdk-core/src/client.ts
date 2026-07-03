import { io, Socket } from 'socket.io-client';
import { SDKConfig, FlagEvaluationResponse, StreamUpdatePayload, FlagUpdateCallback } from './types';

export class FeatureFlagsClient {
  private apiKey: string;
  private apiHost: string;
  private streamingHost: string;
  private socket: Socket | null = null;
  private flagsCache: Map<string, boolean> = new Map();
  private isInitialized: boolean = false;
  private onUpdateCallback?: FlagUpdateCallback;

  constructor(config: SDKConfig) {
    this.apiKey = config.apiKey;
    this.apiHost = config.apiHost || 'http://localhost:3000';
    this.streamingHost = config.streamingHost || 'http://localhost:3005';
  }

  /**
   * Initializes the SDK context by pulling the target flags and connecting to the streaming service.
   * @param tenantId The unique workspace ID of the tenant.
   */
  async init(tenantId: string): Promise<void> {
    if (this.isInitialized) return;

    try {
      console.log('🔄 [SDK] Initializing feature flags stream connection...');
      
      // Establish background real-time sync channel
      this.initializeStream(tenantId);
      this.isInitialized = true;
      console.log('✅ [SDK] Initialization complete.');
    } catch (error: any) {
      console.error('❌ [SDK] Initialization failed:', error.message);
    }
  }

  /**
   * Sets up the WebSocket layer to listen for instant admin switches.
   */
  private initializeStream(tenantId: string): void {
    this.socket = io(this.streamingHost, {
      query: { tenantId },
      transports: ['websocket'], // Forces clean WebSockets protocol connection
    });

    this.socket.on('connect', () => {
      console.log(`🔌 [SDK] Connected to real-time synchronization highway. (ID: ${this.socket?.id})`);
    });

    // Capture incoming Redis event broadcasts forwarded by the streaming server
    this.socket.on('flagUpdated', (data: StreamUpdatePayload) => {
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
  public isEnabled(key: string, fallback: boolean = false): boolean {
    if (!this.isInitialized) {
      console.warn(`⚠️ [SDK] "isEnabled('${key}')" called before init(). Returning fallback value.`);
      return fallback;
    }
    return this.flagsCache.has(key) ? this.flagsCache.get(key)! : fallback;
  }

  /**
   * Registers a listener to run custom application code whenever an admin toggles a flag.
   */
  public onUpdate(callback: FlagUpdateCallback): void {
    this.onUpdateCallback = callback;
  }

  /**
   * Disconnects the socket when the server or application shuts down.
   */
  public close(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}