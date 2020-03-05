import React from 'react';
import PT from 'prop-types';
import { ChannelListHeaderAvatarContainer } from '../ChannelListHeaderAvatar/ChannelListHeaderAvatarContainer';
import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronDown,
  faChevronUp,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export const ChannelList = ({ onClick, isChatBoxClosed, ...props }) => {
  if (props.loading) {
    return <Spinner />;
  }
  return (
    <div
      className={
        isChatBoxClosed
          ? 'str-chat__channel-list-team__main str-chat__channel-list-team__main--expanded'
          : 'str-chat__channel-list-team__main str-chat__channel-list-team__main--minimized'
      }
    >
      <div className="biagri-str-chat__channel-list-team__header">
        <div className="biagri-str-chat__channel-list-team__header--left">
          <ChannelListHeaderAvatarContainer
            source={props.client.user.image}
            name={props.client.user.name || props.client.user.id}
            size={35}
          />
        </div>
        <div className="biagri-str-chat__channel-list-team__header--middle">
          <div className="biagri-str-chat__channel-list-team__header--title">
            {props.client.user.name || props.client.user.id}
          </div>
          <div
            className={`biagri-str-chat__channel-list-team__header--status ${props.client.user.status}`}
          >
            {props.client.user.status}
          </div>
        </div>
        <div className="biagri-str-chat__channel-list-team__header--right">
          <button
            onClick={onClick}
            className="biagri-str-chat__channel-list-team__header--button"
          >
            <FontAwesomeIcon
              icon={isChatBoxClosed ? faChevronDown : faChevronUp}
              color="white"
            />
          </button>
        </div>
        <div className="biagri-str-chat__channel-list-team__header--right">
          <button
            onClick={onClick}
            className="biagri-str-chat__channel-list-team__header--crossButton"
          >
            <FontAwesomeIcon icon={faTimes} color="white" />
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
