import { Component } from 'react';
import PT from 'prop-types';

import { withChatContext } from 'stream-chat-react';

class ChatBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessagesBoxOpen: false,
      isForeGroundGuestMessageOpen: false
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

  openForegroundGuestMessage = () => {
    this.setState({ isForeGroundGuestMessageOpen: true });
  };

  closeForegroundMessage = () => {
    this.setState({ isForeGroundGuestMessageOpen: false });
  };

  render() {
    const { children } = this.props;

    return children({
      handleChatBoxToggle: this.openChat,
      closeChatBox: this.closeChat,
      isMessagesBoxOpen: this.state.isMessagesBoxOpen,
      openForegroundGuestMessage: this.openForegroundGuestMessage,
      closeForegroundMessage: this.closeForegroundMessage,
      isForeGroundGuestMessageOpen: this.state.isForeGroundGuestMessageOpen
    });
  }
}

ChatBoxContainer.propTypes = {
  children: PT.func.isRequired
};

const CustomChatBoxContainer = withChatContext(ChatBoxContainer);

export default CustomChatBoxContainer;
