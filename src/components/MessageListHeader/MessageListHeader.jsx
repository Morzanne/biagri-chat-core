import React from 'react';
import PT from 'prop-types';
import { ChannelListHeaderAvatarContainer } from '../ChannelListHeaderAvatar/ChannelListHeaderAvatarContainer';
import { withChatContext } from 'stream-chat-react';

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
    </div>
  );
};

const CustomMessageListHeader = withChatContext(MessageListHeader);

export default CustomMessageListHeader;
