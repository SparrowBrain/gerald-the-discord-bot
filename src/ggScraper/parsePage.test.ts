import fs from 'fs';
import { parsePage } from './parsePage'

describe('parsePage', () => {
    it('should return expected link list', () => {
        let page = fs.readFileSync('src/ggScraper/parsePage.test.html', 'utf8');

        let result = parsePage(page);

        expect(result).toEqual([
            "/freebie/free-discovery-tour-ancient-egypt-and-discovery-tour-anecient-greece/",
            "/freebie/free-crusader-kings-ii-horse-lords/",
            "/freebie/free-weekend-on-steam-14052020/",
            "/freebie/free-aegis-defenders/",
            "/freebie/free-grand-theft-auto-v/",
            "/freebie/rumour-free-gta-v-on-epic-games-store-tomorrow/",
            "/freebie/free-dying-light-unturned-weapon-pack/",
            "/freebie/free-week-stellaris/",
            "/freebie/free-geneshift-battle-royale-turbo/",
            "/freebie/delores-a-thimbleweed-park-mini-adventure-is-now-free-on-steam-and-epic-games-store/",
            "/freebie/free-four-kings-one-war/",
            "/freebie/free-weekend-on-steam-08052020/",
        ]);
    });
});