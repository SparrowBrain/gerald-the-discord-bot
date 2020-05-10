import { Message } from "../model/Message";

const isStartMessage = (message: Message): Boolean => {
    return message.content.includes('start');
}

export default isStartMessage;