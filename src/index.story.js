import React from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('vz67ratggmhg');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic29saXRhcnktYmFuZC00In0.-05eQQnLFwgeCcbdnMChY9Qag3gGvv_S9cZPtAsSVp4';

chatClient.setUser(
  {
    id: 'solitary-band-4',
    name: 'Solitary band',
    image:
      'https://getstream.io/random_svg/?id=solitary-band-4&name=Solitary+band'
  },
  userToken
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image:
    'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go'
});

export default {
  title: 'MainChatComponent',
  component: App
};

export const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

App.story = {
  name: 'Main Chat Component context'
};
