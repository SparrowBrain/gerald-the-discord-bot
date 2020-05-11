import Discord from 'discord.js';
import { Token } from './config';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';

import { GgScraper } from './ggScraper';


const client = new Discord.Client();
let geraldId: string | undefined;
let oldFreebies: string[] = [];
const ggScraper = new GgScraper();



client.once('ready', () => {
    console.log('Ready!');
    geraldId = client.user?.id;
});

ggScraper.on('freebies-fetched', urls =>{
    oldFreebies = urls;
})


client.login(Token);
ggScraper.fetchFreebies();


client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId) {
        console.log(message.toJSON())

        if (isStartMessage({content:message.content})) {
            message.channel.send("Starting spam!");
            message.channel.send("https://gg.deals" + oldFreebies[0])
        }

        if (isStopMessage({content:message.content})) {
            message.channel.send("ok...");
        }
    }

});


