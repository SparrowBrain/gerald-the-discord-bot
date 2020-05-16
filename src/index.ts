import Discord from 'discord.js';
import { Token } from './config';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import ggScraper from './ggScraper';
import memory from './memory';

const client = new Discord.Client();
let geraldId: string | undefined;

client.once('ready', () => {
    console.log('Ready!');
    geraldId = client.user?.id;
});

client.login(Token);

ggScraper.on('freebies-fetched', (urls: string[]): void => {
    memory.memorizeLinks(urls);
});

ggScraper.fetchFreebies();

let subscriptions: Map<string, Subscription> = new Map();

setInterval(ggScraper.fetchFreebies, 1000 * 60 * 30);

client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId) {
        console.log(message.toJSON())

        if (isStartMessage({ content: message.content })) {
            if (subscriptions.has(message.channel.id)) {
                message.channel.send("Already spammin'...");
            } else {
                const sendToChannel = (link: string): void => {
                    message.channel.send(link);
                };
                memory.on('new-link-found', sendToChannel)
                subscriptions.set(message.channel.id, sendToChannel);
                message.channel.send('Starting spam!');
            }
        }

        if (isStopMessage({ content: message.content })) {
            if (subscriptions.has(message.channel.id)) {
                message.channel.send('ok...');
                const listener = subscriptions.get(message.channel.id) as Subscription;
                memory.off('new-link-found', listener);
                subscriptions.delete(message.channel.id);
            } else {
                message.channel.send("I'm not doing anythin...");
            }
        }
    }

});

interface Subscription {
    (link: string): void;
}
