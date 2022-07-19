import { TextChannel, DMChannel, NewsChannel, PartialDMChannel, ThreadChannel } from 'discord.js';
import { EventEmitter } from 'events';
import { DebugSubscriptionManager } from '../debugSubsciptionsManager/DebugSubscriptionManager';
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
  debugSubsciptionsManager: DebugSubscriptionManager;

  constructor (debugSubsciptionsManager: DebugSubscriptionManager, channels: (DMChannel | NewsChannel | TextChannel)[]) {
    super();

    this.debugSubsciptionsManager = debugSubsciptionsManager;
    channels.forEach((channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) =>
      this.addSubscription(channel)
    );
  }

  public broadcastMessage (message: string): void {
    this.subscriptions.forEach((send, id) => {
      try {
        send(message);
      } catch (ex) {
        this.debugSubsciptionsManager.broadcastMessage(`Error while sending message to ${id} channel. ${ex}`);
        return null;
      }
    });
  }

  public subscribe (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send("Already spammin'...");
    } else {
      this.addSubscription(channel);
      channel.send('Starting spam!');
    }
  }

  public unsubscribe (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    if (this.subscriptions.has(channel.id)) {
      channel.send('ok...');
      this.removeSubscription(channel);
    } else {
      channel.send("I'm not doing anythin'...");
    }
  }

  public tellSubsNumber (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    const subsCount = this.subscriptions.size;
    channel.send('Currently I have ' + subsCount + ' freebies subscribers.');
  }

  private addSubscription (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    const sendToChannel = (link: string): void => {
      channel.send(link);
    };
    this.subscriptions.set(channel.id, sendToChannel);
    this.emit('freebies-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('freebies subscription added to ' + channel.id);
  }

  private removeSubscription (channel: TextChannel | DMChannel | NewsChannel | PartialDMChannel | ThreadChannel) {
    this.subscriptions.delete(channel.id);
    this.emit('freebies-subscriptions-changed', [...this.subscriptions.keys()]);
    console.log('freebies subscription removed from ' + channel.id);
  }
}
