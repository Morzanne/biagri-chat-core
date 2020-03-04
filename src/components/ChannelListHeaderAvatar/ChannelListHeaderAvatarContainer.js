import React, { Component } from 'react';
import PT from 'prop-types';

import { ChannelListHeaderAvatar } from './ChannelListHeaderAvatar';

export class ChannelListHeaderAvatarContainer extends Component {
  state = {
    errored: false,
    loaded: false
  };

  getInitials = name =>
    name
      ? name
          .split(' ')
          .slice(0, 1)
          .map(name => name.charAt(0))
      : null;

  onLoad = () => {
    this.setState({ loaded: true });
  };

  onError = () => {
    this.setState({ errored: true });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.setState({ loaded: false, errored: false });
    }
  }

  onClick;

  render() {
    const { size, name, shape, image } = this.props;
    return (
      <ChannelListHeaderAvatar
        size={size}
        name={name}
        shape={shape}
        image={image}
        initials={this.getInitials(name)}
      />
    );
  }
}

ChannelListHeaderAvatarContainer.propTypes = {
  /** image url */
  image: PT.string,
  /** name of the picture, used for title tag fallback */
  name: PT.string,
  /** shape of the avatar, circle, rounded or square */
  shape: PT.oneOf(['circle', 'rounded', 'square']),
  /** size in pixels */
  size: PT.number
};

ChannelListHeaderAvatarContainer.defaultProps = {
  size: 32,
  shape: 'circle'
};
