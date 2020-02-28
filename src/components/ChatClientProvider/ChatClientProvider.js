import React, { Component } from 'react';
import PT from 'prop-types';
import { StreamChat } from 'stream-chat';

class ChatClientProvider extends Component {
  static propTypes = {
    /**Secret api key thant can be find on the dashboard */
    apiKey: PT.string.isRequired,

    children: PT.func.isRequired
  };

  render() {
    const { children, user, apiKey } = this.props;
    console.log('je render');
    if (!children) {
      return null;
    }

    const client = new StreamChat(apiKey);

    return children({
      chatClient: client,
      user
    });
  }
}

export default ChatClientProvider;
