import { TextBasedChannel } from 'discord.js';
import { EventEmitter } from 'events';
import { Broadcast } from '../shared/subscriptions/Broadcast';

export declare interface FreebiesSubscriptionManager {
  on(
    event: 'freebies-subscriptions-changed',
    listener: (channelIds: string[]) => void
  ): this;
}

// eslint-disable-next-line no-redeclare
export class FreebiesSubscriptionManager extends EventEmitter {
  subscriptions: Map<string, Broadcast> = new Map();

  constructor (channels: (TextBasedChannel)[]) {
    super();

    channels.forEach((channel: TextBasedChannel) =>
      this.addSubscription(channel)
    );
  }

  public broadcastMessage (message: string): void {
    this.subscriptions.forEach((send) => {
      send(message);
    });
  }

  public subscribe (channel: TextBasedChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send("Already spammin'...");
    } else {
      this.addSubscription(channel);
      channel.send('Starting spam!');
    }
  }

  public unsubscribe (channel: TextBasedChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send('ok...');
      this.removeSubscription(channel);
    } else {
      channel.send("I'm not doing anythin'...");
    }
  }

  public tellSubsNumber (channel: TextBasedChannel) {
    const subsCount = this.subscriptions.size;
    channel.send('Currently I have ' + subsCount + ' freebies subscribers.');
  }

  private addSubscription (channel: TextBasedChannel) {
    const sendToChannel = (link: string): void => {
      channel.send(link);
    };
    this.subscriptions.set(channel.id, sendToChannel);
    this.emit('freebies-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('freebies subscription added to ' + channel.id);
  }

  private removeSubscription (channel: TextBasedChannel) {
    this.subscriptions.delete(channel.id);
    this.emit('freebies-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('freebies subscription removed from ' + channel.id);
  }
}
