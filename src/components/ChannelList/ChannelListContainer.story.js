import React from 'react';
import CustomChannelListContainer from './ChannelListContainer';
import { ChannelList, Chat } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import ChatClientProvider from '../ChatClientProvider/ChatClientProvider';

export default {
  title: 'ChannelListState',
  component: ChannelList
};

export const ChannelListState = () => {
  return (
    <ChatClientProvider
      apiKey={'6udgaavbs4pz'}
      secretKey={
        '7327ta9mp4a5yeq4fphqdwba6ubd84fahv22hdnz3v6twzx7xgec98azamxphm4w'
      }
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
