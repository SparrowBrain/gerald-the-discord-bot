import Discord, { Intents } from 'discord.js';
import { Token, FetchIntervalMs } from './config';
import isHelpMessage from './messageFilters/isHelpMessage';
import isStartMessage from './messageFilters/isStartMessage';
import isStopMessage from './messageFilters/isStopMessage';
import isSubsMessage from './messageFilters/isSubsMessage';
import ggScraper from './ggScraper';
import memory from './memory';
import { FreebiesSubscriptionManager } from './freebiesSubscriptions/FreebiesSubscriptionManager';
import { DebugSubscriptionManager } from './debugSubsciptionsManager/DebugSubscriptionManager';
import { initDebugSubscrptionManager } from './debugSubsciptionsManager';
import { initFreebiesSubscrptionManager } from './freebiesSubscriptions';
import isDebugOnMessage from './messageFilters/isDebugOnMessage';
import isDebugOffMessage from './messageFilters/isDebugOffMessage';
import health from './health';

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES], partials: ['CHANNEL'] });
let geraldId: string | undefined;
let freebiesSubscriptionManager: FreebiesSubscriptionManager;
let debugSubscriptionManager: DebugSubscriptionManager;
let isFirstFetch = true;

client.once('ready', async () => {
  console.log('Discord client ready!');
  geraldId = client.user?.id;
  freebiesSubscriptionManager = await initFreebiesSubscrptionManager(client);
  debugSubscriptionManager = await initDebugSubscrptionManager(client);

  client.user?.setPresence({
    activities: [{ name: '@me help', type: 'LISTENING' }]
  });

  ggScraper.on('freebies-fetched', (urls: string[]): void => {
    if (urls.length === 0) {
      debugSubscriptionManager.broadcastMessage('Empty list fetched for freebies');
      return;
    }

    memory.memorizeLinks(urls, debugSubscriptionManager, isFirstFetch);

    if (isFirstFetch) {
      memory.on('new-link-found', (link) => {
        freebiesSubscriptionManager.broadcastMessage(link);
      });
      isFirstFetch = false;
    }
  });
  ggScraper.fetchFreebies();
  setInterval(() => ggScraper.fetchFreebies(), FetchIntervalMs);

  health();
  console.log('Bot ready!');
});

client.on('messageCreate', (message) => {
  if (message.mentions.users.first()?.id === geraldId) {
    console.log(message.toJSON());

    if (isHelpMessage({ content: message.content })) {
      message.channel.send(
        '@me start - subscribe to receive updates about free games\n@me stop - to stop receiving messages from me\n'
      );
    }

    if (isStartMessage({ content: message.content })) {
      freebiesSubscriptionManager.subscribe(message.channel);
    }

    if (isStopMessage({ content: message.content })) {
      freebiesSubscriptionManager.unsubscribe(message.channel);
    }

    if (isSubsMessage({ content: message.content })) {
      freebiesSubscriptionManager.tellSubsNumber(message.channel);
    }

    if (isDebugOnMessage({ content: message.content })) {
      debugSubscriptionManager.subscribe(message.channel);
    }

    if (isDebugOffMessage({ content: message.content })) {
      debugSubscriptionManager.unsubscribe(message.channel);
    }
  }
});

client.login(Token);
