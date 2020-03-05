import React, { Component } from 'react';
import PT from 'prop-types';
import { withChatContext } from 'stream-chat-react';
import { ChannelList } from './ChannelList';

class ChannelListContainer extends Component {
  state = {
    isChatBoxClosed: false
  };

  onClick = () => {
    const { isChatBoxClosed } = this.state;

    const currentChatBoxState = isChatBoxClosed;
    this.setState({ isChatBoxClosed: !currentChatBoxState });
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

ChannelListContainer.propTypes = {
  isChatBoxClosed: PT.bool
};

ChannelListContainer.defaultProps = {
  isChatBoxClosed: false
};

const CustomChannelListContainer = withChatContext(ChannelListContainer);

export default CustomChannelListContainer;
