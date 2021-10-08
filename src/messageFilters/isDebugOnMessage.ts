import { Message } from "../model/Message";

const isDebugOnMessage = (message: Message): Boolean => {
  return message.content.includes("debug on");
};

export default isDebugOnMessage;
