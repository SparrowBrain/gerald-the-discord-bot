import https from 'https'
import events from 'events';
import cheerio from 'cheerio';
import { IncomingMessage } from 'http';

declare interface GgScraper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
}

class GgScraper extends events.EventEmitter {

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
                console.log(data);
                const $ = cheerio.load(data);
                let links = [...new Set($('a[href^="/freebie/"]')
                    .map(function (i, el) {
                        // this === el
                        return $(el).attr('href');
                    }).get())].filter((x: string) => !x.includes('#'));
                console.log(links);
                ggScraper.emit('freebies-fetched', links);
            });
        })
            .on('error', function (e) {
                console.log("Got error: " + e.message);
            });
    }

}

export const ggScraper = new GgScraper();