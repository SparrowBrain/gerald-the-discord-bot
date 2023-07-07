import { saveToFile, loadFromFile } from './file';
import { saveToS3, loadFromS3 } from './s3';
import * as config from '../../../config';
import { SubscriptionsProvider } from '../provider';

export const save = async (channelIds: string[], file: string): Promise<void> => {
  if (config.SubsProvider === SubscriptionsProvider.File) {
    console.log(`saving subs to local file ${file}`);
    saveToFile(channelIds, file);
  } else if (config.SubsProvider === SubscriptionsProvider.S3) {
    console.log(`saving subs to s3 ${file}`);
    await saveToS3(channelIds, file);
  } else {
    throw new Error('Invalid subscriptions provider configuraiton');
  }
};

export const load = async (file: string): Promise<string[]> => {
  if (config.SubsProvider === SubscriptionsProvider.File) {
    console.log('loading subs from local file ' + file);
    return loadFromFile(file);
  } else if (config.SubsProvider === SubscriptionsProvider.S3) {
    console.log('loading subs from s3 ' + file);
    return await loadFromS3(file);
  } else {
    throw new Error('Invalid subscriptions provider configuraiton');
  }
};
