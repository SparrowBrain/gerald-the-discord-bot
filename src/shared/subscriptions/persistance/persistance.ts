import { saveToFile, loadFromFile } from './file';
import * as config from '../../../config';
import { SubscriptionsProvider } from '../provider';

export const save = async (channelIds: string[], file: string): Promise<void> => {
  if (config.SubsProvider === SubscriptionsProvider.File) {
    console.log(`saving subs to local file ${file}`);
    saveToFile(channelIds, file);
  } else {
    throw new Error('Invalid subscriptions provider configuraiton');
  }
};

export const load = async (file: string): Promise<string[]> => {
  if (config.SubsProvider === SubscriptionsProvider.File) {
    console.log('loading subs from local file ' + file);
    return loadFromFile(file);
  } else {
    throw new Error('Invalid subscriptions provider configuraiton');
  }
};
