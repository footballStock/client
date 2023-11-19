interface Config {
  url: string;
  port: number;
  view: any;
  rate: any;
}

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
  view: any;
  rate: any;
}

export default class SocketInterface {
  private config: Config;
  private options: Options;
  private binded_f: {[key: string]: EventListener};
  private socket: WebSocket | null;

  constructor(config: Config) {
    this.config = config;
    this.options = {
      logGuid: 'mock',
      bufferLength: 50,
      serverConfig: {
        defaultLogLength: 300,
        serverUrl: `ws://${config.url}:${config.port}`,
      },
      worker: true,
      maxConcurrency: 4,
      view: config.view,
      rate: config.rate,
    };
    this.binded_f = {};
    this.socket = null;
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
