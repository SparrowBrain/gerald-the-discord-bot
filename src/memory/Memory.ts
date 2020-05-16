import { EventEmitter } from "events";
import { findNewEntries } from "./findNEwEntries";

export declare interface Memory {
    on(event: 'new-link-found', listener: (link: string) => void): this;
}
export class Memory extends EventEmitter {
    knownLinks: Set<string> = new Set<string>();

    public memorizeLinks = (links: string[]) => {
        const newLinks = findNewEntries(this.knownLinks, links);
        this.knownLinks = new Set<string>(links);
        newLinks.forEach(link => {
            console.log("new link found: " + link);
            this.emit('new-link-found', link);
        });
    };
}
