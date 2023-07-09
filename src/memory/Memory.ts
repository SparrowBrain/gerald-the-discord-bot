import { EventEmitter } from 'events';
import fs from 'fs';
import { DebugSubscriptionManager } from '../debugSubsciptionsManager/DebugSubscriptionManager';
import { findNewEntries, findNewEntriesFilteringOutOldInserts } from './findNewEntries';
import { MemoryFile } from '../config';

const maxNewLinks = 10;

export declare interface Memory {
    on(event: 'new-link-found', listener: (link: string) => void): this;
}
// eslint-disable-next-line no-redeclare
export class Memory extends EventEmitter {
    knownLinks: Set<string> = new Set<string>();

    public memorizeLinks = (links: string[], debugSubsciptionsManager: DebugSubscriptionManager) => {
      const newLinks = findNewEntriesFilteringOutOldInserts(this.knownLinks, links);
      const allNewLinks = findNewEntries(this.knownLinks, links);
      this.knownLinks = new Set<string>(links);
      this.saveMemory();

      if (newLinks.length !== allNewLinks.length) {
        debugSubsciptionsManager.broadcastMessage('Links found not on top of the list. They were suppressed:');
        const suppressedLinks = allNewLinks.filter(x => !newLinks.includes(x));
        suppressedLinks.forEach((link: string) => {
          debugSubsciptionsManager.broadcastMessage(`Supressed link: ${link}`);
        });
      }

      if (newLinks.length > maxNewLinks) {
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

    public saveMemory = (): void => {
      const links = [...this.knownLinks];
      fs.writeFileSync(MemoryFile, links.join(','), 'utf-8');
    };

    public loadMemory = (): void => {
      if (!fs.existsSync(MemoryFile)) {
        return;
      }

      const links = fs.readFileSync(MemoryFile, 'utf-8').split(',');
      this.knownLinks = new Set<string>(links);
    };
}
