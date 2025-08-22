import https from 'https';
import events from 'events';
import http, { IncomingMessage } from 'http';
import { parsePage } from './parsePage';
import { WEBSITE_DOMAIN } from './index';
import { userAgents } from './userAgents';
export declare interface GgScraper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
}
// eslint-disable-next-line no-redeclare
export class GgScraper extends events.EventEmitter {
  fetchFreebies () {
    const instance: GgScraper = this;

    const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    console.log(`User-Agent: ${userAgent}`);

    const url = new URL(WEBSITE_DOMAIN + '/news/freebies');

    const httpsOptions: https.RequestOptions = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ?? 443,
      path: url.pathname,
      method: 'GET',
      headers: {
        'User-Agent': userAgent,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    };

    const httpOptions: http.RequestOptions = {
      ...httpsOptions,
      port: url.port ?? 80
    };

    const getFunction = WEBSITE_DOMAIN.startsWith('https') ? https.get : http.get;
    getFunction(WEBSITE_DOMAIN.startsWith('https') ? httpsOptions : httpOptions, function (resp: IncomingMessage) {
      console.log(`[${new Date().toLocaleString('LT')}] Got response: ${resp.statusCode}`);
      let data = '';
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on('end', async function () {
        const links = await parsePage(data);
        console.log(links);
        instance.emit('freebies-fetched', links);
      });
    })
      .on('error', function (e) {
        console.log(`[${new Date().toLocaleString('LT')}] Got error: ${e.message}`);
      });
  }
}
