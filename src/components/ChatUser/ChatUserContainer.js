import React, { Component } from 'react';
import PT from 'prop-types';
import { StreamChat } from 'stream-chat';
import { userId } from '../../data/ChatUser/const';

export class ChatUserContainer extends Component {
  static propTypes = {
    chatClient: PT.instanceOf(StreamChat)
  };

  componentDidMount = () => {
    const { user, chatClient } = this.props;

    if (user) {
      return chatClient.setUser({ id: user.id }, user.token);
    }
    return chatClient.setGuestUser({ id: userId.guest });
  };

  componentDidUpdate = prevProps => {
    const { user, chatClient } = this.props;
    const { prevUser } = prevProps;

    if (prevUser && prevUser !== user) {
      chatClient.setUser({ id: user.id }, user.token);
    }
  };

  render() {
    return null;
  }
}
