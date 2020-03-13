import React, { Component } from 'react';
import PT from 'prop-types';

import ChannelPreview from './ChannelPreview';
import { withChannelContext } from 'stream-chat-react';

class ChannePreviewContainer extends Component {
  onClick = () => {
    const { channel, setActiveChannel, handleChatBoxToggle } = this.props;
    handleChatBoxToggle();
    setActiveChannel(channel);
  };

  render() {
    const { channel, latestMessage, latestMessageLength } = this.props;
    console.log(this.props);

    return (
      <ChannelPreview
        onClick={this.onClick}
        channel={channel}
        latestMessage={latestMessage}
        latestMessageLength={latestMessageLength}
        {...this.props}
      />
    );
  }
}

const CustomChannelPreviewContainer = withChannelContext(
  ChannePreviewContainer
);

ChannePreviewContainer.propTypes = {
  channel: PT.object
};

export default CustomChannelPreviewContainer;
