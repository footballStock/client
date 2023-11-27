interface ServerConfig {
  defaultLogLength: number;
  serverUrl: string;
}

interface Options {
  logGuid: string;
  bufferLength: number;
  serverConfig: ServerConfig;
  worker: boolean;
  maxConcurrency: number;
}

export default class SocketInterface {
  private options: Options;
  private binded_f: {[key: string]: EventListener};
  private socket: WebSocket | null;
  private room_: string;

  constructor(room: string) {
    this.options = {
      logGuid: 'mock',
      bufferLength: 50,
      serverConfig: {
        defaultLogLength: 300,
        serverUrl: `ws://${process.env.REACT_APP_BASE_DOMAIN}:8000/ws/chat/${room}/`,
      },
      worker: true,
      maxConcurrency: 10,
    };
    this.binded_f = {};
    this.socket = null;
    this.room_ = room;
  }

  get room(): string {
    return this.room_;
  }

  connect(): void {
    this.socket = new WebSocket(this.options.serverConfig.serverUrl);
  }

  registerEvent(key: string, f: EventListener, pointer?: any): void {
    this.binded_f[key] = pointer ? f.bind(pointer) : f;
    this.socket?.addEventListener(key, this.binded_f[key]);
  }

  send(message: string): void {
    this.socket?.send(message);
  }
}
