import Discord from 'discord.js'
import { Token, FetchIntervalMs } from './config'
import isHelpMessage from './messageFilters/isHelpMessage'
import isStartMessage from './messageFilters/isStartMessage'
import isStopMessage from './messageFilters/isStopMessage'
import isSubsMessage from './messageFilters/isSubsMessage'
import ggScraper from './ggScraper'
import memory from './memory'
import { FreebiesSubscriptionManager } from './freebiesSubscriptions/FreebiesSubscriptionManager'
import { DebugSubscriptionManager } from './debugSubsciptionsManager/DebugSubscriptionManager'
import { initDebugSubscrptionManager } from './debugSubsciptionsManager'
import { initFreebiesSubscrptionManager } from './freebiesSubscriptions'
import isDebugOnMessage from './messageFilters/isDebugOnMessage'
import isDebugOffMessage from './messageFilters/isDebugOffMessage'

const client = new Discord.Client()
let geraldId: string | undefined
let freebiesSubscriptionManager: FreebiesSubscriptionManager
let debugSubscriptionManager: DebugSubscriptionManager

client.once('ready', async () => {
  console.log('Ready!')
  geraldId = client.user?.id
  freebiesSubscriptionManager = await initFreebiesSubscrptionManager(client)
  debugSubscriptionManager = await initDebugSubscrptionManager(client)

  memory.on('new-link-found', (link) => {
    freebiesSubscriptionManager.broadcastMessage(link)
  })

  client.user?.setPresence({
    activity: { name: '@me help', type: 'LISTENING' }
  })
})

ggScraper.on('freebies-fetched', (urls: string[]): void => {
  if (urls.length === 0) {
    debugSubscriptionManager.broadcastMessage('Empty list fetched for freebies')
  }

  memory.memorizeLinks(urls)
})
ggScraper.fetchFreebies()
setInterval(() => ggScraper.fetchFreebies(), FetchIntervalMs)

client.on('message', (message) => {
  if (message.mentions.users.first()?.id === geraldId) {
    console.log(message.toJSON())

    if (isHelpMessage({ content: message.content })) {
      message.channel.send(
        '@me start - subscribe to receive updates about free games\n@me stop - to stop receiving messages from me\n'
      )
    }

    if (isStartMessage({ content: message.content })) {
      freebiesSubscriptionManager.subscribe(message.channel)
    }

    if (isStopMessage({ content: message.content })) {
      freebiesSubscriptionManager.unsubscribe(message.channel)
    }

    if (isSubsMessage({ content: message.content })) {
      freebiesSubscriptionManager.tellSubsNumber(message.channel)
    }

    if (isDebugOnMessage({ content: message.content })) {
      debugSubscriptionManager.subscribe(message.channel)
    }

    if (isDebugOffMessage({ content: message.content })) {
      debugSubscriptionManager.unsubscribe(message.channel)
    }
  }
})

client.login(Token)
