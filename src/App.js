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

import index from '../src/styles/index.css';

const App = ({ apiKey, secretKey, user }) => {
  return (
    <ChatClientProvider apiKey={apiKey} secretKey={secretKey} user={user}>
      {({ chatClient }) => (
        <Chat client={chatClient} theme={'biagri'}>
          <ChannelList />
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
