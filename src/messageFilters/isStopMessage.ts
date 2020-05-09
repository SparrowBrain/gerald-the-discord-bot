import { Message } from "discord.js"

const isStopMessage = (message: Message): Boolean => {
    return message.content.includes('stop');
}

export default isStopMessage;