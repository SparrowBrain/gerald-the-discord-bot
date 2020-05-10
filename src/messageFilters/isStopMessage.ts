import { Message } from "../model/Message";

const isStopMessage = (message: Message): Boolean => {
    return message.content.includes('stop');
}

export default isStopMessage;