import React from 'react';
import { ChannelListHeaderAvatarContainer } from '../ChannelListHeaderAvatar/ChannelListHeaderAvatarContainer';
import { withChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const MessageListHeader = ({ ...props }) => {
  return (
    <div className="biagri-str-chat__header">
      {props.channel.data.image && (
        <ChannelListHeaderAvatarContainer
          image={props.channel.data.image}
          shape="rounded"
          size={props.channel.type === 'commerce' ? 60 : 40}
        />
      )}
      <div className="str-chat__header-livestream-left">
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
          onClick={props.handleChatBoxToggle}
          className="biagri-str-chat__channel-box-team__header--crossButton"
        >
          <FontAwesomeIcon icon={faTimes} color="white" />
        </button>
      </div>
    </div>
  );
};

const CustomMessageListHeader = withChatContext(MessageListHeader);

export default CustomMessageListHeader;
