import React from 'react';
import {
  Chat,
  Channel,
  Thread,
  ChannelList,
  InfiniteScrollPaginator
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import ChatClientProvider from './components/ChatClientProvider/ChatClientProvider';
import CustomChannelListContainer from './components/ChannelList/ChannelListContainer';
import CustomMessageListHeader from './components/MessageListHeader/MessageListHeader';
import CustomChatBox from './components/ChatBox/ChatBox';

import index from '../src/styles/index.css';

const App = ({ apiKey, secretKey, user }) => {
  return (
    <ChatClientProvider apiKey={apiKey} secretKey={secretKey} user={user}>
      {({ chatClient }) => (
        <Chat client={chatClient} theme={'biagri'}>
          <ChannelList List={CustomChannelListContainer} />
          <Channel Paginator={props => <InfiniteScrollPaginator {...props} />}>
            <CustomChatBox>
              <CustomMessageListHeader />
              <MessageList />
              <MessageInput />
            </CustomChatBox>
            <Thread />
          </Channel>
        </Chat>
      )}
    </ChatClientProvider>
  );
};
export default App;
