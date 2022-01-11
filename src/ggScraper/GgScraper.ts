import https from 'https';
import events from 'events';
import http, { IncomingMessage } from 'http';
import { parsePage } from './parsePage';
import { WEBSITE_DOMAIN } from './index';
export declare interface GgScraper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
}
// eslint-disable-next-line no-redeclare
export class GgScraper extends events.EventEmitter {
  fetchFreebies () {
    const instance: GgScraper = this;
    const getFunction = WEBSITE_DOMAIN.startsWith('https') ? https.get : http.get;
    getFunction(WEBSITE_DOMAIN + '/news/freebies', function (resp: IncomingMessage) {
      console.log('Got response: ' + resp.statusCode);
      let data = '';
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on('end', function () {
        const links = parsePage(data);
        const fullLinks = links.map(element => { return WEBSITE_DOMAIN + element; });
        console.log(fullLinks);
        instance.emit('freebies-fetched', fullLinks);
      });
    })
      .on('error', function (e) {
        console.log('Got error: ' + e.message);
      });
  }
}
