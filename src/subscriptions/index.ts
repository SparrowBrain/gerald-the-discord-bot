import { SubscriptionManager } from "./SubscriptionManager";
import { saveToFile, loadFromFile } from "./persistance";
import { Client } from "discord.js";
import { fetchChannels } from "./fetchChannels";



export const initSubscrptionManager = async (client: Client): Promise<SubscriptionManager> => {
    const ids = loadFromFile();
    // const channels = await fetchChannels(client, ids)
    const subscriptionManager = new SubscriptionManager([]);
    subscriptionManager.on('subscriptions-changed', (ids: string[]) => {
        saveToFile(ids);
    });
    return subscriptionManager;
}