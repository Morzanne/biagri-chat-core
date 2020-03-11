import React, { Component } from 'react';
import ChannelPreview from './ChannelPreview';
import { withChatContext } from 'stream-chat-react';

class ChannePreviewContainer extends Component {
  onClick = () => {
    const {
      channel,
      setActiveChannel,
      handleChatBoxToggle,
    } = this.props;
    handleChatBoxToggle();
    setActiveChannel(channel);
  };

  render() {
    const { channel } = this.props;

    return <ChannelPreview onClick={this.onClick} channel={channel} />;
  }
}

const CustomChannelPreviewContainer = withChatContext(ChannePreviewContainer);

export default CustomChannelPreviewContainer;
