import { Broadcast } from "./Broadcast";
import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import { EventEmitter } from "events";

export declare interface SubscriptionManager {
    on(event: 'subscriptions-changed', listener: () => void): this;
}

export class SubscriptionManager extends EventEmitter {

    subscriptions: Map<string, Broadcast> = new Map();

    constructor(channels: TextChannel[] | DMChannel[] | NewsChannel[]) {
        super();

        channels.forEach((channel: TextChannel | DMChannel | NewsChannel) => this.addSubscription(channel));
    }

    public broadcastMessage(message: string): void {
        this.subscriptions.forEach(send => {
            send(message);
        });
    }

    public subscribe(channel: TextChannel | DMChannel | NewsChannel) {
        if (this.subscriptions.has(channel.id)) {
            channel.send("Already spammin'...");
        } else {
            this.addSubscription(channel);
            channel.send('Starting spam!');
        }
    }

    public unsubscribe(channel: TextChannel | DMChannel | NewsChannel) {
        if (this.subscriptions.has(channel.id)) {
            channel.send('ok...');
            this.removeSubscription(channel);
        } else {
            channel.send("I'm not doing anythin'...");
        }
    }

    private addSubscription(channel: DMChannel | TextChannel | NewsChannel) {
        const sendToChannel = (link: string): void => {
            channel.send(link);
        };
        this.subscriptions.set(channel.id, sendToChannel);
        this.emit('subscriptions-changed');
    }

    private removeSubscription(channel: DMChannel | TextChannel | NewsChannel) {
        this.subscriptions.delete(channel.id);
        this.emit('subscriptions-changed');
    }
}