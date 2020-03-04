import React from 'react';
import PT from 'prop-types';
import { ChannelListHeaderAvatarContainer } from '../ChannelListHeaderAvatar/ChannelListHeaderAvatarContainer';
import { withChatContext } from 'stream-chat-react';
import Spinner from '../common/Spinner';
import FontAwesome from 'react-fontawesome';

export const ChannelList = ({ onClick, isChatBoxOpen, ...props }) => {
  if (props.loading) {
    return <Spinner />;
  }
  return (
    <div
      className={
        isChatBoxOpen
          ? 'str-chat__channel-list-team__main str-chat__channel-list-team__main-expanded'
          : 'str-chat__channel-list-team__main str-chat__channel-list-team__main-minimized'
      }
    >
      <div className="str-chat__channel-list-team__header">
        <div className="str-chat__channel-list-team__header--left">
          <ChannelListHeaderAvatarContainer
            source={props.client.user.image}
            name={props.client.user.name || props.client.user.id}
            size={35}
            onClick={onClick}
          />
        </div>
        <div className="str-chat__channel-list-team__header--middle">
          <div className="str-chat__channel-list-team__header--title">
            {props.client.user.name || props.client.user.id}
          </div>
          <div
            className={`str-chat__channel-list-team__header--status ${props.client.user.status}`}
          >
            {props.client.user.status}
          </div>
        </div>
        <div className="str-chat__channel-list-team__header--right">
          <button
            onClick={onClick}
            className="str-chat__channel-list-team__header--button"
          >
            TOGGLE
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
};

ChannelList.propTypes = {
  loading: PT.bool,

  error: PT.bool,

  client: PT.object,

  LoadingIndicator: PT.oneOfType([PT.node, PT.func]),

  LoadingErrorIndicator: PT.oneOfType([PT.node, PT.func])
};

ChannelList.defaultProps = {
  error: false
};
