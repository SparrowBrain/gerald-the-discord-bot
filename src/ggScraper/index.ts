import https from 'https'
import events from 'events';
import { IncomingMessage } from 'http';
import { parsePage } from './parsePage';

declare interface GgScraper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
}

const emitStuff = () => {

}

class GgScraper extends events.EventEmitter {

    constructor() {
        super();
        emitFreebiesFetched = 2;
    }

    fetchFreebies() {
        https.get('https://gg.deals/news/freebies/', function (resp: IncomingMessage) {

            console.log("Got response: " + resp.statusCode);
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', function () {
                let links = parsePage(data);

                console.log(links);
                // ggScraper.emit('freebies-fetched', links);
                emitStuff()
            });
        })
            .on('error', function (e) {
                console.log("Got error: " + e.message);
            });
    }

}

export const ggScraper = new GgScraper();