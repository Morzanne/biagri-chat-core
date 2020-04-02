import React, { Fragment } from "react";
import PT from "prop-types";

import { Channel, Thread, InfiniteScrollPaginator } from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";

import { CustomInputChatContainer } from '../../components/CustomInputChat/CustomInputChatContainer';
import MessageListHeader from "../../components/MessageListHeader/MessageListHeader";
import MessagesBoxContainer from "../../components/MessagesBox/MessagesBoxContainer";
import ForegroundGuestMessage from "../../components/ForegroundGuestMessage/ForegroundGuestMessage";
import { userRoles } from "../../data/ChatUser/const";

function MessagePanel({
  closeChatBox,
  isForeGroundGuestMessageOpen,
  closeForegroundMessage,
  openForegroundGuestMessage,
  user
}) {
  return (
    <Channel Paginator={InfiniteScrollPaginator}>
      <Thread />
      <MessagesBoxContainer>
        <MessageListHeader closeChatBox={closeChatBox} />
        {isForeGroundGuestMessageOpen && (
          <ForegroundGuestMessage onClose={closeForegroundMessage} />
        )}
        <MessageList />
        <MessageInput
          Input={CustomInputChatContainer}
          overrideSubmitHandler={
            user.role === userRoles.guest
              ? () => openForegroundGuestMessage()
              : null
          }
        />
      </MessagesBoxContainer>
    </Channel>
  );
}

export default MessagePanel;
