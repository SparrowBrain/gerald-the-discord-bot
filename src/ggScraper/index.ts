import { ScrapeUrl } from '../config';
import { GgScraper } from './GgScraper';

export const WEBSITE_DOMAIN = ScrapeUrl;

const ggScraper = new GgScraper();
export default ggScraper;
