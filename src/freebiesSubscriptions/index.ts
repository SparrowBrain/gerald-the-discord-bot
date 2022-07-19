import { Client } from 'discord.js';
import { fetchChannels } from '../shared/subscriptions/fetchChannels';
import { load, save } from '../shared/subscriptions/persistance/persistance';
import { FreebiesSubsFile } from '../config';
import { FreebiesSubscriptionManager } from './FreebiesSubscriptionManager';
import { DebugSubscriptionManager } from '../debugSubsciptionsManager/DebugSubscriptionManager';

export const initFreebiesSubscrptionManager = async (
  client: Client,
  debugSubsciptionsManager: DebugSubscriptionManager
): Promise<FreebiesSubscriptionManager> => {
  const ids = await load(FreebiesSubsFile);
  console.log('loaded freebies channel ids: ' + ids);
  const channels = await fetchChannels(debugSubsciptionsManager, client, ids);
  const subscriptionManager = new FreebiesSubscriptionManager(debugSubsciptionsManager, channels);
  subscriptionManager.on('freebies-subscriptions-changed', (ids: string[]) => {
    save(ids, FreebiesSubsFile);
  });
  return subscriptionManager;
};
