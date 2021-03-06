import { Component } from 'react';
import PT from 'prop-types';

import { StreamChat } from 'stream-chat';
import { userId } from '../../data/ChatUser/const';
import User from '../../data/Model/user';

class ChatClientProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: props.client
    };
  }

  componentDidMount = () => {
    const { user, apiKey } = this.props;
    if (!this.state.client) {
      const client = new StreamChat(apiKey);
      if (user) {
        client.setUser(
          {
            id: user.id
          },
          user.token
        );
      } else {
        client.setGuestUser({
          id: userId.guest,
          name: userId.guest
        });
      }

      this.setState({
        client
      });
    }
  };

  render() {
    const { children, user } = this.props;

    const { client } = this.state;

    if (!children || !client) {
      return null;
    }

    return children({
      chatClient: client,
      user
    });
  }
}

ChatClientProvider.defaultProps = {
  client: null
};

ChatClientProvider.propTypes = {
  /**Secret api key thant can be find on the dashboard */
  apiKey: PT.string.isRequired,

  children: PT.func.isRequired,

  user: PT.instanceOf(User)
};

export default ChatClientProvider;
