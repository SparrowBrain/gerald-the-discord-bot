import dotenv from 'dotenv'
import { SubscriptionsProvider } from './subscriptions/provider'

dotenv.config()

export const Token = process.env.DISCORD_BOT_TOKEN

export const SubsProvider: SubscriptionsProvider = process.env.GERALD_SUBS_PROVIDER as SubscriptionsProvider || SubscriptionsProvider.File
export const FreebiesSubsFile: string = 'subs.txt'
export const DebugSubsFile: string = 'debugSubs.txt'

export const AwsAccessKeyId = process.env.AWS_ACCESS_KEY_ID
export const AwsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

export const FetchIntervalMs: number = 1000 * 60 * 60
