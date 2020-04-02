import React, { Fragment } from "react";
import PT from "prop-types";

import { Chat, Streami18n } from "stream-chat-react";

import ChatClientProvider from "./components/ChatClientProvider/ChatClientProvider";
import CustomChatBoxContainer from "./components/ChatBox/ChatBoxContainer";
import ChannelPanel from "./v2/components/ChannelPanel";
import MessagePanel from "./v2/components/MessagePanel";
import User from "./data/Model/user";
import fr from './i18n/fr';

import "./styles/index.css";

const i18n = new Streami18n(fr);

const App = ({ apiKey, user, theme }) => {
  return (
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
                isForeGroundGuestMessageOpen
              }) => (
                <Fragment>
                  <ChannelPanel handleChatBoxToggle={handleChatBoxToggle} />
                  {isMessagesBoxOpen && (
                    <MessagePanel
                      user={chatClient.user}
                      closeChatBox={closeChatBox}
                      isMessagesBoxOpen={isMessagesBoxOpen}
                      isForeGroundGuestMessageOpen={
                        isForeGroundGuestMessageOpen
                      }
                      closeForegroundMessage={closeForegroundMessage}
                      openForegroundGuestMessage={openForegroundGuestMessage}
                    />
                  )}
                </Fragment>
              )}
            </CustomChatBoxContainer>
          </Chat>
        )}
      </ChatClientProvider>
    </aside>
  );
};

App.defaultProps = {
  theme: "biagri"
};

App.propTypes = {
  apiKey: PT.string.isRequired,
  secretKey: PT.string.isRequired,
  theme: PT.string,
  user: PT.instanceOf(User)
};

export default App;
