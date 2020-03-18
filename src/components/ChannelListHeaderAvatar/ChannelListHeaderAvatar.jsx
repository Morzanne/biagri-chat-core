import React from 'react';
import PT from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export const ChannelListHeaderAvatar = ({ size, shape }) => {
  return (
    <div className="str-chat__avatar-wrapper">
      <div
        className={`str-chat__avatar str-chat__avatar--${shape}`}
        title={name}
        style={{
          width: size,
          height: size,
          flexBasis: size,
          lineHeight: size + 'px',
          fontSize: size / 2
        }}
      >
        <div className="str-chat__avatar-fallback">
          <FontAwesomeIcon icon={faComments} color="black" />
        </div>
      </div>
    </div>
  );
};

ChannelListHeaderAvatar.propTypes = {
  shape: PT.oneOf(['circle', 'rounded', 'square']),
  size: PT.number
};

ChannelListHeaderAvatar.defaultProps = {
  size: 32,
  shape: 'circle'
};
