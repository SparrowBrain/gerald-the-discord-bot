import { saveToFile, loadFromFile } from "./file"
import { saveToS3, loadFromS3 } from "./s3"
import * as config from '../../config'
import { SubscriptionsProvider } from "../provider";

export const save = (channelIds: string[]): void => {
    if (config.SubsProvider === SubscriptionsProvider.File) {
        saveToFile(channelIds);
    }
    else if (config.SubsProvider === SubscriptionsProvider.S3) {
        saveToS3(channelIds);
    }
    else {
        throw new Error('Invalid subscriptions provider configuraiton');
    }
}

export const load = (): string[] => {
    if (config.SubsProvider === SubscriptionsProvider.File) {
        return loadFromFile();
    }
    else if (config.SubsProvider === SubscriptionsProvider.S3) {
        return loadFromS3();
    }
    else {
        throw new Error('Invalid subscriptions provider configuraiton');
    }
}