import Discord from 'discord.js';
import { Token, FetchIntervalMs } from './config';
import isHelpMessage from './messageFilters/isHelpMessage';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import isSubsMessage from './messageFilters/isSubsMessage';
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
    });

    client.user?.setPresence({ activity: { name: '@me help', type: 'LISTENING' } })
});

ggScraper.on('freebies-fetched', (urls: string[]): void => {
    memory.memorizeLinks(urls);
});
ggScraper.fetchFreebies();
setInterval(() => ggScraper.fetchFreebies(), FetchIntervalMs);

client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId) {
        console.log(message.toJSON());

        if (isHelpMessage({ content: message.content })) {
            message.channel.send('@me start - subscribe to receive updates about free games\n@me stop - to stop receiving messages from me\n');
        }

        if (isStartMessage({ content: message.content })) {
            subscriptionManager.subscribe(message.channel);
        }

        if (isStopMessage({ content: message.content })) {
            subscriptionManager.unsubscribe(message.channel);
        }

        if (isSubsMessage({ content: message.content })) {
            subscriptionManager.tellSubsNumber(message.channel);
        }
    }

});

client.login(Token);
