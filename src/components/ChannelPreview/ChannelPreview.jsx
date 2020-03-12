import React from 'react';
import PT from 'prop-types';

import { ChannelPreviewAvatarContainer } from './ChannelPreviewAvatar/ChannelPreviewAvatarContainer';

const ChannelPreview = ({ onClick, channel, ...props }) => {
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
        {channelName}
      </div>
    </button>
  );
};

export default ChannelPreview;
