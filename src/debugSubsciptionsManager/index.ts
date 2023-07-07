import { Client } from 'discord.js';
import { fetchChannels } from '../shared/subscriptions/fetchChannels';
import { load, save } from '../shared/subscriptions/persistance/persistance';
import { DebugSubsFile } from '../config';
import { DebugSubscriptionManager } from './DebugSubscriptionManager';

export const initDebugSubscrptionManager = async (
  client: Client
): Promise<DebugSubscriptionManager> => {
  const ids = await load(DebugSubsFile);
  console.log('loaded debug channel ids: ' + ids);
  const channels = await fetchChannels(client, ids);
  const subscriptionManager = new DebugSubscriptionManager(channels);
  subscriptionManager.on('debug-subscriptions-changed', async (ids: string[]) => {
    await save(ids, DebugSubsFile);
  });
  return subscriptionManager;
};
