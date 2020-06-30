import { SubscriptionManager } from "./SubscriptionManager";
import { saveToFile, loadFromFile } from "./persistance/file";
import { Client } from "discord.js";
import { fetchChannels } from "./fetchChannels";



export const initSubscrptionManager = async (client: Client): Promise<SubscriptionManager> => {
    const ids = loadFromFile();
    console.log('loaded channel ids: ' + ids)
    const channels = await fetchChannels(client, ids)
    const subscriptionManager = new SubscriptionManager(channels);
    subscriptionManager.on('subscriptions-changed', (ids: string[]) => {
        saveToFile(ids);
    });
    return subscriptionManager;
}