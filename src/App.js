import React, { Fragment } from 'react';
import PT from 'prop-types';

import {
  Chat,
  Channel,
  Thread,
  ChannelList,
  InfiniteScrollPaginator,
  Streami18n
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import ChatClientProvider from './components/ChatClientProvider/ChatClientProvider';
import CustomChannelListContainer from './components/ChannelList/ChannelListContainer';
import CustomMessageListHeader from './components/MessageListHeader/MessageListHeader';
import CustomChatBoxContainer from './components/ChatBox/ChatBoxContainer';
import CustomChannelPreviewContainer from './components/ChannelPreview/ChannelPreviewContainer';
import CustomMessagesBoxContainer from './components/MessagesBox/MessagesBoxContainer';
import ForegroundGuestMessage from './components/ForegroundGuestMessage/ForegroundGuestMessage';
import User from './data/Model/user';
import { userRoles } from './data/ChatUser/const';
import { CustomInputChatContainer } from './components/CustomInputChat/CustomInputChatContainer';

import './styles/index.css';


const i18n = new Streami18n({ language:'fr' });

const App = ({ apiKey, user, theme }) => {
  return (
    <Fragment>
      <aside className="chat-overlay">
        <ChatClientProvider apiKey={apiKey} user={user}>
          {({ chatClient }) => (
            <Chat client={chatClient} theme={theme} i18nInstance={i18n}>
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
                              Input={CustomInputChatContainer}
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

App.defaultProps = {
  theme: 'biagri'
};

App.propTypes = {
  apiKey: PT.string.isRequired,

  secretKey: PT.string.isRequired,

  theme: PT.string,

  user: PT.instanceOf(User)
};
