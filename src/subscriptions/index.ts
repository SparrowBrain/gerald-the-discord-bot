import { SubscriptionManager } from './SubscriptionManager'
import { Client } from 'discord.js'
import { fetchChannels } from './fetchChannels'
import { load, save } from './persistance/persistance'
import { FreebiesSubsFile } from '../config'

export const initSubscrptionManager = async (client: Client): Promise<SubscriptionManager> => {
  const ids = await load(FreebiesSubsFile)
  console.log('loaded channel ids: ' + ids)
  const channels = await fetchChannels(client, ids)
  const subscriptionManager = new SubscriptionManager(channels)
  subscriptionManager.on('subscriptions-changed', (ids: string[]) => {
    save(ids, FreebiesSubsFile)
  })
  return subscriptionManager
}
