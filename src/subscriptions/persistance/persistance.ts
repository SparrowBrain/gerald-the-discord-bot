import { saveToFile, loadFromFile } from "./file"
import { saveToS3, loadFromS3 } from "./s3"
import * as config from '../../config'
import { SubscriptionsProvider } from "../provider";

export const save = (channelIds: string[]): void => {
    if (config.SubsProvider === SubscriptionsProvider.File) {
        console.log('saving subs to local file');
        saveToFile(channelIds);
    }
    else if (config.SubsProvider === SubscriptionsProvider.S3) {
        console.log('saving subs to s3');
        saveToS3(channelIds);
    }
    else {
        throw new Error('Invalid subscriptions provider configuraiton');
    }
}

export const load = async (): Promise<string[]> => {
    if (config.SubsProvider === SubscriptionsProvider.File) {
        console.log('loading subs from local file');
        return loadFromFile();
    }
    else if (config.SubsProvider === SubscriptionsProvider.S3) {
        console.log('loading subs from s3');
        return await loadFromS3();
    }
    else {
        throw new Error('Invalid subscriptions provider configuraiton');
    }
}