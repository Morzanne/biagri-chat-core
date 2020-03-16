import React, { Component } from 'react';
import PT from 'prop-types';

import { ChannelPreviewAvatar } from './ChannelPreviewAvatar';

export class ChannelPreviewAvatarContainer extends Component {
  state = {
    errored: false,
    loaded: false
  };

  // EXTERNALIZE THIS ?
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

  render() {
    const { size, name, shape, image } = this.props;
    const { errored, loaded } = this.state;
    return (
      <ChannelPreviewAvatar
        size={size}
        name={name}
        shape={shape}
        image={image}
        onLoad={this.onLoad}
        onError={this.onError}
        errored={errored}
        loaded={loaded}
        initials={this.getInitials(name)}
      />
    );
  }
}

ChannelPreviewAvatarContainer.propTypes = {
  /** image url */
  image: PT.string,
  /** name of the picture, used for title tag fallback */
  name: PT.string,
  /** shape of the avatar, circle, rounded or square */
  shape: PT.oneOf(['circle', 'rounded', 'square']),
  /** size in pixels */
  size: PT.number
};

ChannelPreviewAvatarContainer.defaultProps = {
  size: 32,
  shape: 'circle'
};
