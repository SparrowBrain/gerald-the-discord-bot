import { Client } from 'discord.js'
import { fetchChannels } from '../shared/subscriptions/fetchChannels'
import { load, save } from '../shared/subscriptions/persistance/persistance'
import { FreebiesSubsFile } from '../config'
import { FreebiesSubscriptionManager } from './FreebiesSubscriptionManager'

export const initFreebiesSubscrptionManager = async (
  client: Client
): Promise<FreebiesSubscriptionManager> => {
  const ids = await load(FreebiesSubsFile)
  console.log('loaded freebies channel ids: ' + ids)
  const channels = await fetchChannels(client, ids)
  const subscriptionManager = new FreebiesSubscriptionManager(channels)
  subscriptionManager.on('freebies-subscriptions-changed', (ids: string[]) => {
    save(ids, FreebiesSubsFile)
  })
  return subscriptionManager
}
