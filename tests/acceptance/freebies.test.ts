/**
 * @jest-environment ./tests/acceptance/testEnvironment
 */

import Discord, { GatewayIntentBits, Partials, TextChannel } from 'discord.js';
import { ScrapeUrl, TestChannelId, Token } from '../../src/config';
import { LivePage } from './constants';
import { getGameFloodPage, getInitPage, getNewGameOnSteamPage, getNewNonSubscriberGamePage, getNewsItems, getOldGamePage } from './pages/pages';
import { NewsItem } from './pages/types';
const fs = require('fs');

let geraldId:string|undefined;
let channel: TextChannel;
let newsItems :NewsItem[] = [];
const client = new Discord.Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages], partials: [Partials.Channel] });
const messages:Discord.Message[] = [];

describe('freebies', () => {
  beforeAll(async () => {
    client.once('ready', async () => {
      geraldId = client.user?.id;
      channel = await client.channels.fetch(TestChannelId) as TextChannel;
    });

    client.on('messageCreate', (message) => {
      if (message.author.id === geraldId &&
        message.mentions.users.first()?.id !== geraldId) {
        messages.push(message);
      }
    });
    client.login(Token);

    // eslint-disable-next-line no-unmodified-loop-condition
    while (geraldId === undefined || channel === undefined) {
      await delay(1000);
    }
  }, 30000);

  beforeEach(async () => {
    channel.send(`<@!${geraldId}> stop`);
    resetPage();
    await delay(5000);
    while (messages.pop() !== undefined);
  }, 30000);

  it('subscription messages should work', async () => {
    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    let message = messages.shift();
    expect(message!.content).toBe('Starting spam!');

    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    message = messages.shift();
    expect(message!.content).toBe("Already spammin'...");

    channel.send(`<@!${geraldId}> stop`);
    await delay(5000);
    message = messages.shift();
    expect(message!.content).toBe('ok...');

    channel.send(`<@!${geraldId}> stop`);
    await delay(5000);
    message = messages.shift();
    expect(message!.content).toBe("I'm not doing anythin'...");
  }, 30000);

  it('should show one new game for subscribers', async () => {
    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    messages.shift();

    setPage(getNewGameOnSteamPage(newsItems));

    await delay(5000);
    const message = messages.shift();
    expect(message!.content).toBe(ScrapeUrl + '/freebie/free-new-game-on-steam/');
  }, 30000);

  it('should not show a new game for non-subscribers', async () => {
    channel.send(`<@!${geraldId}> stop`);
    await delay(5000);
    messages.shift();

    setPage(getNewNonSubscriberGamePage(newsItems));

    await delay(5000);
    const message = messages.shift();
    expect(message).toBeUndefined();
  }, 30000);

  it('should not show new games if there are more than 10', async () => {
    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    messages.shift();

    setPage(getGameFloodPage(newsItems));

    await delay(5000);
    const message = messages.shift();
    expect(message).toBeUndefined();
  }, 30000);

  it('should not show game added below the last already existing game', async () => {
    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    messages.shift();

    setPage(getOldGamePage(newsItems));

    await delay(5000);
    const message = messages.shift();
    expect(message).toBeUndefined();
  }, 30000);

  afterAll(() => {
    client.destroy();
  });
});

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const setPage = (contents:string) => {
  fs.writeFileSync(LivePage, contents);
};

const resetPage = () => {
  newsItems = getNewsItems();
  const contents = getInitPage(newsItems);
  setPage(contents);
};
