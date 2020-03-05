import React from 'react';
import { withChannelContext } from 'stream-chat-react';

export const ChatBox = ({ children }) => {
  return <div className="str-chat__main-panel">{children}</div>;
};

const CustomChatBox = withChannelContext(ChatBox);

export default CustomChatBox;
