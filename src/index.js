import React from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

const App = () => (
  <Chat>
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput /> 
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
