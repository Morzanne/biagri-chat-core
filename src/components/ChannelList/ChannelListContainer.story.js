import React from 'react';
import CustomChannelListContainer from './ChannelListContainer';
import { ChannelList, Chat } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import ChatClientProvider from '../ChatClientProvider/ChatClientProvider';

export default {
  title: 'ChannelListState',
  component: ChannelList
};

export const DesktopAndTableChannelListState = () => {
  return (
    <ChatClientProvider
      apiKey={'6udgaavbs4pz'}
      user={{
        id: '2150',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjE1MCJ9.cBMkZPngxIq2DPF_KEv2xtX5vrhol48z0aQOCRLCi50'
      }}
    >
      {({ chatClient }) => (
        <Chat client={chatClient} theme={'biagri'}>
          <ChannelList List={CustomChannelListContainer} />
        </Chat>
      )}
    </ChatClientProvider>
  );
};
