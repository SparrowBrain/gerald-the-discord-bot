import { Broadcast } from "./Broadcast";
import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import { EventEmitter } from "events";

export declare interface SubscriptionManager {
    on(event: 'subscriptions-changed', listener: () => void): this;
}

export class SubscriptionManager extends EventEmitter {

    subscriptions: Map<string, Broadcast> = new Map();

    public broadcastMessage(message: string): void {
        this.subscriptions.forEach(send => {
            send(message);
        });
    }

    public subscribe(channel: TextChannel | DMChannel | NewsChannel) {
        if (this.subscriptions.has(channel.id)) {
            channel.send("Already spammin'...");
        } else {
            const sendToChannel = (link: string): void => {
                channel.send(link);
            };
            this.subscriptions.set(channel.id, sendToChannel);
            channel.send('Starting spam!');
        }
    }

    public unsubscribe(channel: TextChannel | DMChannel | NewsChannel) {
        if (this.subscriptions.has(channel.id)) {
            channel.send('ok...');
            this.subscriptions.delete(channel.id);
        } else {
            channel.send("I'm not doing anythin'...");
        }
    }

}