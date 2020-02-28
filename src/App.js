import React, { Fragment } from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  ChannelList,
  InfiniteScrollPaginator
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import ChatClientProvider from './components/ChatClientProvider/ChatClientProvider';
import { ChatUserContainer } from './components/ChatUser/ChatUserContainer';

import 'stream-chat-react/dist/css/index.css';

const App = ({ apiKey, secretKey, user }) => {
  return (
    <ChatClientProvider apiKey={apiKey} secretKey={secretKey} user={user}>
      {({ chatClient, user }) => (
        <Chat client={chatClient} theme={'messaging light'}>
          <ChannelList />
          <ChatUserContainer user={user} chatClient={chatClient} />
          <Channel Paginator={props => <InfiniteScrollPaginator {...props} />}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      )}
    </ChatClientProvider>
  );
};
export default App;
