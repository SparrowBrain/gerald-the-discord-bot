import { Message } from "../model/Message";

const isSubsMessage = (message: Message): Boolean => {
    return message.content.includes('subs');
}

export default isSubsMessage;