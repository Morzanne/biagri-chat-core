import React from 'react';
import PT from 'prop-types';

import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronDown,
  faChevronUp,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { ChannelListHeaderAvatar } from '../ChannelListHeaderAvatar/ChannelListHeaderAvatar';

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
      <div
        className="biagri-str-chat__channel-list-team__header"
        onClick={onClick}
      >
        <div className="biagri-str-chat__channel-list-team__header--left">
          <ChannelListHeaderAvatar size={35} />
        </div>
        <div className="biagri-str-chat__channel-list-team__header--middle">
          <div className="biagri-str-chat__channel-list-team__header--title">
            Discussions
          </div>

          <div
            className={`biagri-str-chat__channel-list-team__header--status ${props.client.user.status}`}
          >
            {props.client.user.status}
          </div>
        </div>
        <div className="new-tag">Nouveau</div>
        <div className="biagri-str-chat__channel-list-team__header--right">
          <button className="biagri-str-chat__channel-list-team__header--button">
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

  client: PT.object
};

ChannelList.defaultProps = {
  error: false
};
