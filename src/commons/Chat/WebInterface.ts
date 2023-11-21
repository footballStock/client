class WebInterface {
  port: string;
  url: string;

  constructor() {
    const inputUrl: string = document.URL;
    let webServerAddr: string = inputUrl.split('/')[2].split(':')[0];
    let query: string | undefined = inputUrl.split('?')[1];
    let options: {[key: string]: string} = query ? this.getOptions(query) : {};

    this.port = options['port'] ? options['port'] : '10453';
    this.url = options['address'] ? options['address'] : webServerAddr;
  }

  getOptions(query: string): {[key: string]: string} {
    let optsStr: string[] = query.split('&');
    let options: {[key: string]: string} = {};
    for (let opt of optsStr) {
      let [key, value] = opt.split('=');
      options[key] = value;
    }
    return options;
  }
}

export default new WebInterface();
