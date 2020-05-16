import Discord from 'discord.js';
import { Token } from './config';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import ggScraper from './ggScraper';
import memory from './memory';
import subscriptionManager from './subscriptions';

const client = new Discord.Client();
let geraldId: string | undefined;

client.once('ready', () => {
    console.log('Ready!');
    geraldId = client.user?.id;
});

client.login(Token);

memory.on('new-link-found', (link) => {
    subscriptionManager.broadcastMessage(link);
})

ggScraper.on('freebies-fetched', (urls: string[]): void => {
    memory.memorizeLinks(urls);
});
ggScraper.fetchFreebies();
setInterval(() => ggScraper.fetchFreebies(), 1000 * 60 * 10);

client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId) {
        console.log(message.toJSON());

        if (isStartMessage({ content: message.content })) {
            subscriptionManager.subscribe(message.channel);
        }

        if (isStopMessage({ content: message.content })) {
            subscriptionManager.unsubscribe(message.channel);
        }
    }

});


