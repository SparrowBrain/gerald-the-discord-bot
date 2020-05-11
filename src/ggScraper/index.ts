import https from 'https'
import events from 'events';
import cheerio from 'cheerio';
import { IncomingMessage } from 'http';


// export declare interface GgScraper {
//     on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
//     on(event: string, listener: Function): this;
// }

export class GgScraper extends events.EventEmitter {

    fetchFreebies() {

        https.get('https://gg.deals/news/freebies/', function(this: GgScraper, resp:IncomingMessage){

            console.log("Got response: " + resp.statusCode);
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', function(this: GgScraper) {
                console.log(data);
                const $ = cheerio.load(data);
                let links = [...new Set($('a[href^="/freebie/"]')
                    .map(function (i, el) {
                        // this === el
                        return $(el).attr('href');
                    }).get())].filter((x: string) => !x.includes('#'));
                console.log(links);
                // this.emitFreebiesFetched(links);
                this.emit('freebies-fetched', links);
            });
        })
        .on('error', function (e) {
            console.log("Got error: " + e.message); 
            });
    }

}