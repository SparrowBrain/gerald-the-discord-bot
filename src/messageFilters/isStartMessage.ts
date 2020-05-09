import { Message } from "discord.js"

const isStartMessage = (message: Message): Boolean => {
    return message.content.includes('start');
}

export default isStartMessage;