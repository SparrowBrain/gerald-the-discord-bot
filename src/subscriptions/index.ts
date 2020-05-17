import { SubscriptionManager } from "./SubscriptionManager";
import { saveToFile, loadFromFile } from "./persistance";

const ids = loadFromFile();
const subscriptionManager = new SubscriptionManager([]]);
subscriptionManager.on('subscriptions-changed', (ids: string[]) => {
    saveToFile(ids);
})

export default subscriptionManager;