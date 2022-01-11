/**
 * @jest-environment ./tests/acceptance/testEnvironment
 */

import Discord, { TextChannel } from 'discord.js';
import { TestChannelId, Token } from '../../src/config';
const fs = require('fs');

let geraldId:string|undefined;
const client = new Discord.Client();
const messages:Discord.Message[] = [];

describe('freebies', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    client.once('ready', async () => {
      geraldId = client.user?.id;
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

  it('subscription messages should work', async () => {
    jest.setTimeout(30000);

    const channel = await client.channels.fetch(TestChannelId) as TextChannel;

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

    fs.copyFileSync('./tests/acceptance/pages/b.html', './tests/acceptance/pages/live.html');
  });

  afterAll(() => {
    client.destroy();
  });
});

// {
//   channelID: '930242099717242880',
//   deleted: false,
//   id: '930248798452736050',
//   type: 'DEFAULT',
//   system: false,
//   content: '<@!885633874107985960> start',
//   authorID: '330738958331936778',
//   pinned: false,
//   tts: false,
//   nonce: '930248798431608832',
//   embeds: [],
//   attachments: [],
//   createdTimestamp: 1641858996738,
//   editedTimestamp: 0,
//   webhookID: null,
//   applicationID: null,
//   activity: null,
//   flags: 0,
//   reference: null,
//   guildID: null,
//   cleanContent: '@gerald-test-bot start'
// }

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
