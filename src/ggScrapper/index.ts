import https from 'https'
import events from 'events';
import cheerio from 'cheerio';


export declare interface GgScrapper {
    on(event: 'freebies-fetched', listener: (urls: string[]) => void): this;
    // on(event: string, listener: Function): this;
}

export class GgScrapper extends events.EventEmitter {


    fetchFreebies() {

        https.get('https://gg.deals/news/freebies/', this.processResponse).on('error', function (e) {
            console.log("Got error: " + e.message); 
            });
    };

    private processResponse(response: import("http").IncomingMessage): void {

        console.log("Got response: " + response.statusCode);
        let data = '';
        // A chunk of data has been recieved.
        response.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        response.on('end', () => {
            console.log(data);
            const $ = cheerio.load(data);
            let links = [...new Set($('a[href^="/freebie/"]')
                .map(function (i, el) {
                    // this === el
                    return $(el).attr('href');
                }).get())].filter((x: string) => !x.includes('#'));
            console.log(links);
            this.emitFreebiesFetched(links);
        });
    }

    emitFreebiesFetched(urls: string[]): void {
        this.emit('freebies-fetched', urls);
    }
}