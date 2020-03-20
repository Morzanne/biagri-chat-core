import React, { Fragment } from 'react';
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
import CustomChatBoxContainer from './components/ChatBox/ChatBoxContainer';
import CustomChannelPreviewContainer from './components/ChannelPreview/ChannelPreviewContainer';
import CustomMessagesBoxContainer from './components/MessagesBox/MessagesBoxContainer';
import ForegroundGuestMessage from './components/ForegroundGuestMessage/ForegroundGuestMessage';
import NavbarChannelListButtonContainer from './components/NavbarChannelListButton/NavbarChannelListButtonContainer';
import { userRoles } from './data/ChatUser/const';
import { BiagriInputChatContainer } from './components/BiagriInputChat/BiagriInputChatContainer';

import index from '../src/styles/index.css';

const App = ({ apiKey, secretKey, user }) => {
  return (
    <Fragment>
      <NavbarChannelListButtonContainer />
      <aside className="chat-overlay">
        <ChatClientProvider apiKey={apiKey} secretKey={secretKey} user={user}>
          {({ chatClient }) => (
            <Chat client={chatClient} theme={'biagri'}>
              <CustomChatBoxContainer>
                {({
                  handleChatBoxToggle,
                  isMessagesBoxOpen,
                  closeChatBox,
                  openForegroundGuestMessage,
                  closeForegroundMessage,
                  isForeGroundGuestMessageOpen,
                  ...props
                }) => (
                  <Fragment>
                    <ChannelList
                      List={CustomChannelListContainer}
                      Preview={props => (
                        <CustomChannelPreviewContainer
                          {...props}
                          handleChatBoxToggle={handleChatBoxToggle}
                          isMessagesBoxOpen={isMessagesBoxOpen}
                        />
                      )}
                    />
                    {isMessagesBoxOpen && (
                      <Channel
                        Paginator={props => (
                          <InfiniteScrollPaginator {...props} />
                        )}
                      >
                        <Fragment>
                          <Thread />
                          <CustomMessagesBoxContainer>
                            <CustomMessageListHeader
                              {...props}
                              closeChatBox={closeChatBox}
                              isMessagesBoxOpen={isMessagesBoxOpen}
                            />
                            {isForeGroundGuestMessageOpen && (
                              <ForegroundGuestMessage
                                onClose={closeForegroundMessage}
                              />
                            )}
                            <MessageList />

                            <MessageInput
                              overrideSubmitHandler={
                                chatClient.user.role === userRoles.guest
                                  ? () => openForegroundGuestMessage()
                                  : null
                              }
                              Input={BiagriInputChatContainer}
                            />
                          </CustomMessagesBoxContainer>
                        </Fragment>
                      </Channel>
                    )}
                  </Fragment>
                )}
              </CustomChatBoxContainer>
            </Chat>
          )}
        </ChatClientProvider>
      </aside>
    </Fragment>
  );
};
export default App;
