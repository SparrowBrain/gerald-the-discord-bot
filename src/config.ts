import dotenv from 'dotenv';
import { SubscriptionsProvider } from './subscriptions/provider';

dotenv.config();

export const Token = process.env.DISCORD_BOT_TOKEN;
export const SubsProvider: SubscriptionsProvider = process.env.GERALD_SUBS_PROVIDER as SubscriptionsProvider || SubscriptionsProvider.File;

export const SubsFile: string = 'subs.txt';
export const FetchIntervalMs: number = 1000 * 60 * 60;