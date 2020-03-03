import { Component } from 'react';
import PT from 'prop-types';
import { StreamChat } from 'stream-chat';

class ChatClientProvider extends Component {
  static propTypes = {
    /**Secret api key thant can be find on the dashboard */
    apiKey: PT.string.isRequired,

    children: PT.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      client: props.client
    };
  }

  componentDidMount = () => {
    if (!this.state.client)
      this.setState({
        client: new StreamChat(this.props.apiKey)
      });
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

export default ChatClientProvider;
