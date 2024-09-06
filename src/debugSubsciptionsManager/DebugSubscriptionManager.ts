import { TextBasedChannel, TextChannel } from 'discord.js';
import { EventEmitter } from 'events';
import { Broadcast } from '../shared/subscriptions/Broadcast';

export declare interface DebugSubscriptionManager {
  on(
    event: 'debug-subscriptions-changed',
    listener: (channelIds: string[]) => void
  ): this;
}

// eslint-disable-next-line no-redeclare
export class DebugSubscriptionManager extends EventEmitter {
  subscriptions: Map<string, Broadcast> = new Map();

  constructor (channels: (TextBasedChannel)[]) {
    super();

    channels.forEach((channel: TextBasedChannel) =>
      this.addSubscription(channel)
    );
  }

  public broadcastMessage (message: string): void {
    console.log(message);
    this.subscriptions.forEach((send) => {
      send(message);
    });
  }

  public subscribe (channel: TextBasedChannel) {
    if (this.subscriptions.has(channel.id)) {
      (channel as TextChannel).send("Already spammin'...");
    } else {
      this.addSubscription(channel);
      (channel as TextChannel).send('Debug messages started.');
    }
  }

  public unsubscribe (channel: TextBasedChannel) {
    if (this.subscriptions.has(channel.id)) {
      (channel as TextChannel).send('stopping debug');
      this.removeSubscription(channel);
    } else {
      (channel as TextChannel).send("I'm not doing anythin'...");
    }
  }

  private addSubscription (channel: TextBasedChannel) {
    const sendToChannel = (link: string): void => {
      (channel as TextChannel).send(link);
    };
    this.subscriptions.set(channel.id, sendToChannel);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription added to ' + channel.id);
  }

  private removeSubscription (channel: TextBasedChannel) {
    this.subscriptions.delete(channel.id);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription removed from ' + channel.id);
  }
}
