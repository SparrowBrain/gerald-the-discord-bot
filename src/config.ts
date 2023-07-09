import dotenv from 'dotenv';
import { SubscriptionsProvider } from './shared/subscriptions/provider';

dotenv.config();

export const Token = process.env.DISCORD_BOT_TOKEN;

export const SubsProvider: SubscriptionsProvider = process.env.GERALD_SUBS_PROVIDER as SubscriptionsProvider || SubscriptionsProvider.File;
export const FreebiesSubsFile: string = 'subs.txt';
export const DebugSubsFile: string = 'debugSubs.txt';
export const MemoryFile :string = 'memory.txt';

export const AwsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
export const AwsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

export const ScrapeUrl: string = process.env.SCRAPE_URL ?? 'https://gg.deals';
export const FetchIntervalMs: number = process.env.FETCH_INTERVAL ? parseInt(process.env.FETCH_INTERVAL) : 1000 * 60 * 60;
export const FetchRandomIntervalMs: number = process.env.FETCH_INTERVAL_RANDOM ? parseInt(process.env.FETCH_INTERVAL_RANDOM) : 1000 * 60 * 15;

export const ApiPort: number = process.env.API_PORT ? parseInt(process.env.API_PORT) : 80;

// Acceptance test variables
export const TestChannelId = process.env.TEST_CHANNEL_ID || 'UNFILLED';
