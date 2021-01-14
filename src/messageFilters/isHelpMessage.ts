import { Message } from "../model/Message";

const isHelpMessage = (message: Message): Boolean => {
    return message.content.includes('help');
}

export default isHelpMessage;