import Discord from 'discord.js';
import { Token, FetchIntervalMs } from './config';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import ggScraper from './ggScraper';
import memory from './memory';
import { initSubscrptionManager } from './subscriptions';
import { SubscriptionManager } from './subscriptions/SubscriptionManager';

const client = new Discord.Client();
let geraldId: string | undefined;
let subscriptionManager: SubscriptionManager;

client.once('ready', async () => {
    console.log('Ready!');
    geraldId = client.user?.id;
    subscriptionManager = await initSubscrptionManager(client);

    memory.on('new-link-found', (link) => {
        subscriptionManager.broadcastMessage(link);
    })
});

client.login(Token);

ggScraper.on('freebies-fetched', (urls: string[]): void => {
    memory.memorizeLinks(urls);
});
ggScraper.fetchFreebies();
setInterval(() => ggScraper.fetchFreebies(), FetchIntervalMs);

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


