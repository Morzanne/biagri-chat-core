import React from 'react';
import PT from 'prop-types';

import { withChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const MessageListHeader = ({ ...props }) => {
  return (
    <div className="biagri-str-chat__header">
      <div className="str-chat__header-livestream-left">
        <button
          className="biagri-str-chat__channel-box-team__header--leftArrow"
          onClick={props.closeChatBox}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </button>
        <p className="str-chat__header-livestream-left--title">
          {props.title || props.channel.data.name || props.channel.data.id}{' '}
        </p>
        {props.channel.data.subtitle && (
          <p className="str-chat__header-livestream-left--subtitle">
            {props.channel.data.subtitle}
          </p>
        )}
      </div>
      <div className="biagri-str-chat__channel-list-team__header--right">
        <button
          onClick={props.closeChatBox}
          className="biagri-str-chat__channel-box-team__header--crossButton"
        >
          <FontAwesomeIcon icon={faTimes} color="white" />
        </button>
      </div>
    </div>
  );
};

MessageListHeader.propTypes = {
  channel: PT.object,
  closeChatBox: PT.func
};

const CustomMessageListHeader = withChatContext(MessageListHeader);

export default CustomMessageListHeader;
