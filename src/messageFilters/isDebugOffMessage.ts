import { Message } from "../model/Message";

const isDebugOffMessage = (message: Message): Boolean => {
  return message.content.includes("debug off");
};

export default isDebugOffMessage;
