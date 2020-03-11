import React, { Component } from 'react';
import { withChannelContext } from 'stream-chat-react';
import { MessagesBox } from './MessagesBox';

class MessagesBoxContainer extends Component {
  render() {
    const { children } = this.props;
    return <MessagesBox children={children} />;
  }
}

const CustomMessagesBoxContainer = withChannelContext(MessagesBoxContainer);

export default CustomMessagesBoxContainer;
