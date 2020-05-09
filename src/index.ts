import Discord from 'discord.js';
import { Token } from './config';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import cheerio from 'cheerio';
import https from 'https'
import { linkSync } from 'fs';


const client = new Discord.Client();
let geraldId: string | undefined;
let oldFreebies: string[] = [];

function scrapeFreebies() {
    https.get('https://gg.deals/news/freebies/', function (res) {
        console.log("Got response: " + res.statusCode);
        
        let data = '';

        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        res.on('end', () => {
          console.log(data);

          const $ = cheerio.load(data);
          let links = [... new Set($('a[href^="/freebie/"]')
          .map(function(i, el) {
            // this === el
            return $(el).attr('href');   
          }).get())].filter((x:string)=>!x.includes('#'));
          
          
        
          console.log(links);
          oldFreebies=links;
    });
          



    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });


}

scrapeFreebies();

client.once('ready', () => {
    console.log('Ready!');
    geraldId = client.user?.id
});



client.login(Token);




client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId) {
        console.log(message.toJSON())

        if (isStartMessage(message)) {
            message.channel.send("Starting spam!");
            message.channel.send("https://gg.deals"+oldFreebies[0])
        }

        if (isStopMessage(message)) {
            message.channel.send("ok...");
        }
    }

});


