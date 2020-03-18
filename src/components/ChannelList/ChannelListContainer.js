import React, { Component } from 'react';
import { withChatContext } from 'stream-chat-react';
import { ChannelList } from './ChannelList';
import { EventHandler } from '../../lib/eventHandler';

class ChannelListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChatBoxClosed: false
    };
    EventHandler.dispatch('openChat', {
      onClick: this.onClick
    });
  }

  onClick = () => {
    const { isChatBoxClosed } = this.state;
    const currentChatBoxState = isChatBoxClosed;

    this.setState({ isChatBoxClosed: !currentChatBoxState });
    EventHandler.dispatch('openChat', {
      currentChatBoxState: !currentChatBoxState,
      onClick: this.onClick
    });
  };

  render() {
    const { ...props } = this.props;
    return (
      <ChannelList
        onClick={this.onClick}
        {...props}
        isChatBoxClosed={this.state.isChatBoxClosed}
      />
    );
  }
}

ChannelListContainer.defaultProps = {
  isChatBoxClosed: false
};

const CustomChannelListContainer = withChatContext(ChannelListContainer);

export default CustomChannelListContainer;
