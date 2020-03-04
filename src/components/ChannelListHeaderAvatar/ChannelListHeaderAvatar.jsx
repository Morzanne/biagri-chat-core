import React from 'react';

export const ChannelListHeaderAvatar = ({
  size,
  name,
  shape,
  image,
  initials
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
      {image && !this.state.errored ? (
        <img
          src={image}
          alt={initials}
          className={
            'str-chat__avatar-image' +
            (this.state.loaded ? ' str-chat__avatar-image--loaded' : '')
          }
          style={{
            width: size,
            height: size,
            flexBasis: size,
            objectFit: 'cover'
          }}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      ) : (
        <div className="str-chat__avatar-fallback">{initials}</div>
      )}
    </div>
  );
};
