import { TextChannel, DMChannel, NewsChannel } from 'discord.js';
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

  constructor (channels: (DMChannel | NewsChannel | TextChannel)[]) {
    super();

    channels.forEach((channel: TextChannel | DMChannel | NewsChannel) =>
      this.addSubscription(channel)
    );
  }

  public broadcastMessage (message: string): void {
    console.log(message);
    this.subscriptions.forEach((send) => {
      send(message);
    });
  }

  public subscribe (channel: TextChannel | DMChannel | NewsChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send("Already spammin'...");
    } else {
      this.addSubscription(channel);
      channel.send('Debug messages started.');
    }
  }

  public unsubscribe (channel: TextChannel | DMChannel | NewsChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send('stopping debug');
      this.removeSubscription(channel);
    } else {
      channel.send("I'm not doing anythin'...");
    }
  }

  private addSubscription (channel: DMChannel | TextChannel | NewsChannel) {
    const sendToChannel = (link: string): void => {
      channel.send(link);
    };
    this.subscriptions.set(channel.id, sendToChannel);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription added to ' + channel.id);
  }

  private removeSubscription (channel: DMChannel | TextChannel | NewsChannel) {
    this.subscriptions.delete(channel.id);
    this.emit('debug-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('debug subscription removed from ' + channel.id);
  }
}
