import { Component } from 'react';
import PT from 'prop-types';
import { withChatContext } from 'stream-chat-react';

class ChatBoxContainer extends Component {
  static propTypes = {
    children: PT.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isMessagesBoxOpen: false
    };
  }

  openChat = () => {
    this.setState(prevState => ({
      isMessagesBoxOpen: prevState.isMessagesBoxOpen
        ? prevState.isMessagesBoxOpen
        : !prevState.isMessagesBoxOpen
    }));
  };

  closeChat = () => {
    return this.setState(prevState => ({
      isMessagesBoxOpen: false
    }));
  };

  render() {
    const { children } = this.props;

    return children({
      handleChatBoxToggle: this.openChat,
      closeChatBox: this.closeChat,
      isMessagesBoxOpen: this.state.isMessagesBoxOpen
    });
  }
}

const CustomChatBoxContainer = withChatContext(ChatBoxContainer);

export default CustomChatBoxContainer;