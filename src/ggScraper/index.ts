import https from 'https'
import events from 'events';
import { IncomingMessage } from 'http';
import { parsePage } from './parsePage';

const WEBSITE_DOMAIN = 'https://gg.deals';

declare interface GgScraper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
}



class GgScraper extends events.EventEmitter {

    fetchFreebies() {
        const instance: GgScraper = this;
        https.get(WEBSITE_DOMAIN + '/news/freebies/', function (resp: IncomingMessage) {

            console.log("Got response: " + resp.statusCode);
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
                console.log("Got error: " + e.message);
            });
    }

}

export const ggScraper = new GgScraper();