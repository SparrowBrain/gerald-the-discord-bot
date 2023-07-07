import { Message } from '../model/Message';

const isLinksMessage = (message: Message): Boolean => {
  return message.content.includes('links');
};

export default isLinksMessage;
