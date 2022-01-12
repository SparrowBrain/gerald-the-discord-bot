/**
 * @jest-environment ./tests/acceptance/testEnvironment
 */

import Discord, { TextChannel } from 'discord.js';
import { ScrapeUrl, TestChannelId, Token } from '../../src/config';
import { GameFlood, InitPage, LivePage, NewGameOnSteam, NonSubscriberGame } from './constants';
const fs = require('fs');

let geraldId:string|undefined;
let channel: TextChannel;
const client = new Discord.Client();
const messages:Discord.Message[] = [];

describe('freebies', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    client.once('ready', async () => {
      geraldId = client.user?.id;
      channel = await client.channels.fetch(TestChannelId) as TextChannel;
    });

    client.on('message', (message) => {
      if (message.author.id === geraldId &&
        message.mentions.users.first()?.id !== geraldId) {
        messages.push(message);
      }
    });
    client.login(Token);

    // eslint-disable-next-line no-unmodified-loop-condition
    while (geraldId === undefined) {
      await delay(1000);
    }
  });

  beforeEach(async () => {
    channel.send(`<@!${geraldId}> stop`);
    resetPage();
    await delay(5000);
    while (messages.pop() !== undefined);
  });

  it('subscription messages should work', async () => {
    jest.setTimeout(30000);

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
  });

  it('should show one new game for subscribers', async () => {
    jest.setTimeout(30000);

    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    messages.shift();

    setPage(NewGameOnSteam);

    await delay(5000);
    const message = messages.shift();
    expect(message!.content).toBe(ScrapeUrl + '/freebie/free-new-game-on-steam/');
  });

  it('should not show a new game for non-subscribers', async () => {
    jest.setTimeout(30000);

    channel.send(`<@!${geraldId}> stop`);
    await delay(5000);
    messages.shift();

    setPage(NonSubscriberGame);

    await delay(5000);
    const message = messages.shift();
    expect(message).toBeUndefined();
  });

  it('should not show new games if there are more than 10', async () => {
    jest.setTimeout(30000);

    channel.send(`<@!${geraldId}> start`);
    await delay(5000);
    messages.shift();

    setPage(GameFlood);

    await delay(5000);
    const message = messages.shift();
    expect(message).toBeUndefined();
  });

  afterAll(() => {
    client.destroy();
  });
});

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const setPage = (path:string) => {
  fs.copyFileSync(path, LivePage);
};

const resetPage = () => {
  setPage(InitPage);
};
