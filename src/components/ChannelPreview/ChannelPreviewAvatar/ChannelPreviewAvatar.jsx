import React from 'react';
import PT from 'prop-types';

export const ChannelPreviewAvatar = ({
  size,
  name,
  shape,
  image,
  initials,
  onLoad,
  onError,
  errored,
  loaded
}) => {
  return (
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
      {image && !errored ? (
        <img
          src={image}
          alt={initials}
          className={
            'str-chat__avatar-image' +
            (loaded ? ' str-chat__avatar-image--loaded' : '')
          }
          style={{
            width: size,
            height: size,
            flexBasis: size,
            objectFit: 'cover'
          }}
          onLoad={onLoad}
          onError={onError}
        />
      ) : (
        <div className="str-chat__avatar-fallback">{initials}</div>
      )}
    </div>
  );
};

ChannelPreviewAvatar.propTypes = {
  image: PT.string,
  name: PT.string,
  shape: PT.oneOf(['circle', 'rounded', 'square']),
  size: PT.number,
  loaded: PT.bool,
  errored: PT.bool,
  onError: PT.func,
  onLoad: PT.func
};
