import React, { Component } from 'react';
import PT from 'prop-types';
import { withChatContext } from 'stream-chat-react';
import { ChannelList } from './ChannelList';

class ChannelListContainer extends Component {
  state = {
    isChatBoxOpen: false
  };

  onClick = () => {
    const { isChatBoxOpen } = this.state;

    const currentChatBoxState = isChatBoxOpen;
    this.setState({ isChatBoxOpen: !currentChatBoxState });
  };

  render() {
    const { ...props } = this.props;
    return (
      <ChannelList
        onClick={this.onClick}
        {...props}
        isChatBoxOpen={this.state.isChatBoxOpen}
      />
    );
  }
}

ChannelListContainer.propTypes = {
  isChatBoxOpen: PT.bool
};

ChannelListContainer.defaultProps = {
  isChatBoxOpen: false
};

const CustomChannelListContainer = withChatContext(ChannelListContainer);

export default CustomChannelListContainer;
