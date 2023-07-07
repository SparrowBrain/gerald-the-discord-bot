import { EventEmitter } from 'events';
import { DebugSubscriptionManager } from '../debugSubsciptionsManager/DebugSubscriptionManager';
import { findNewEntries, findNewEntriesFilteringOutOldInserts } from './findNewEntries';

const maxNewLinks = 10;

export declare interface Memory {
    on(event: 'new-link-found', listener: (link: string) => void): this;
}
// eslint-disable-next-line no-redeclare
export class Memory extends EventEmitter {
    knownLinks: Set<string> = new Set<string>();

    public memorizeLinks = (links: string[], debugSubsciptionsManager: DebugSubscriptionManager, isFirstFetch: boolean) => {
      const newLinks = findNewEntriesFilteringOutOldInserts(this.knownLinks, links);
      const allNewLinks = findNewEntries(this.knownLinks, links);
      this.knownLinks = new Set<string>(links);

      if (newLinks.length !== allNewLinks.length) {
        debugSubsciptionsManager.broadcastMessage('Links found not on top of the list. They were suppressed:');
        const suppressedLinks = allNewLinks.filter(x => !newLinks.includes(x));
        suppressedLinks.forEach((link: string) => {
          debugSubsciptionsManager.broadcastMessage(`Supressed link: ${link}`);
        });
      }

      if (newLinks.length > maxNewLinks && !isFirstFetch) {
        debugSubsciptionsManager.broadcastMessage(`New links exceed maximum new link count (${maxNewLinks}). Total memory size is ${links.length}. Something might be wrong. Supressing new-link-found events.`);
        newLinks.forEach((link: string) => {
          debugSubsciptionsManager.broadcastMessage(`Supressed link: ${link}`);
        });
        return;
      }

      newLinks.forEach((link: string) => {
        console.log('new link found: ' + link);
        this.emit('new-link-found', link);
      });
    };

    public getLinks = () => {
      return this.knownLinks;
    }
}
