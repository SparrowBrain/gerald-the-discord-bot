import { EventEmitter } from "events";
import { DebugSubscriptionManager } from "../debugSubsciptionsManager/DebugSubscriptionManager";
import { findNewEntries } from "./findNewEntries";

const maxNewLinks = 10;

export declare interface Memory {
    on(event: 'new-link-found', listener: (link: string) => void): this;
}
export class Memory extends EventEmitter {
    knownLinks: Set<string> = new Set<string>();

    public memorizeLinks = (links: string[], debugSubsciptionsManager: DebugSubscriptionManager) => {
        const newLinks = findNewEntries(this.knownLinks, links);
        this.knownLinks = new Set<string>(links);

        if (newLinks.length > maxNewLinks) {
            debugSubsciptionsManager.broadcastMessage(`New links exceed maximum new link count (${maxNewLinks}). Total memory size is ${links.length}. Something might be wrong. Supressing new-link-found events.`);
            newLinks.forEach(link => {
                debugSubsciptionsManager.broadcastMessage(`Supressed link: ${link}`);
            });
        }

        newLinks.forEach(link => {
            console.log("new link found: " + link);
            this.emit('new-link-found', link);
        });
    };
}
