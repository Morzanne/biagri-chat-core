import React from 'react';
import PT from 'prop-types';

import { ChannelPreviewAvatarContainer } from './ChannelPreviewAvatar/ChannelPreviewAvatarContainer';

const ChannelPreview = ({
  onClick,
  channel,
  latestMessage,
  latestMessageLength,
  ...props
}) => {
  const unreadClass =
    props.unread_count >= 1 ? 'str-chat__channel-preview-compact--unread' : '';
  const activeClass = props.active
    ? 'str-chat__channel-preview-compact--active'
    : '';
  const channelName = channel.data.name || channel.cid;
  return (
    <button
      className={`str-chat__channel-preview-compact ${unreadClass} ${activeClass}`}
      onClick={onClick}
    >
      <div className="str-chat__channel-preview-compact--left">
        <ChannelPreviewAvatarContainer
          shape="rounded"
          image={channel.data.image}
          size={30}
          name={channel.cid}
        />
      </div>
      <div className="str-chat__channel-preview-compact--right">
        <span>{channelName}</span>
        <span className="str-chat__channel-preview-last-message">
          {!channel.state.messages[0]
            ? 'Aucun message pour le moment'
            : latestMessage}
        </span>
      </div>
    </button>
  );
};

ChannelPreview.propTypes = {
  channel: PT.object,
  latestMessage: PT.string,
  latestMessageLength: PT.number,
  onClick: PT.func
};

export default ChannelPreview;
