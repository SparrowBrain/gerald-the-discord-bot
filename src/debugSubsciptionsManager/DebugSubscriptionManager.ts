import { TextChannel, DMChannel, NewsChannel, PartialDMChannel, ThreadChannel } from 'discord.js';
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

  constructor (channels: (TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel)[]) {
    super();

    channels.forEach((channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) =>
      this.addSubscription(channel)
    );
  }

  public broadcastMessage (message: string): void {
    console.log(message);
    this.subscriptions.forEach((send) => {
      send(message);
    });
  }

  public subscribe (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send("Already spammin'...");
    } else {
      this.addSubscription(channel);
      channel.send('Debug messages started.');
    }
  }

  public unsubscribe (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send('stopping debug');
      this.removeSubscription(channel);
    } else {
      channel.send("I'm not doing anythin'...");
    }
  }

  private addSubscription (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    const sendToChannel = (link: string): void => {
      channel.send(link);
    };
    this.subscriptions.set(channel.id, sendToChannel);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription added to ' + channel.id);
  }

  private removeSubscription (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    this.subscriptions.delete(channel.id);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription removed from ' + channel.id);
  }
}
