import { Component } from 'react';
import PT from 'prop-types';
import { withChatContext } from 'stream-chat-react';

class ChatBoxContainer extends Component {
  static propTypes = {
    children: PT.func.isRequired
  };

  constructor(props) {
    super(props);
    const channels = [];
    this.state = {
      channels
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.channel !== this.props.channel) {
      this.setState(prevState => ({
        channels: [
          ...prevState.channels,
          { isMessagesBoxOpen: false, id: this.props.channel.id }
        ]
      }));
    }
  };

  onClick = () => {
    const { channel } = this.props;
    console.log(this.state.channels);

    this.setState({
      channels: [
        ...this.state.channels.filter(chan => channel.data.id !== chan.id),
        {
          isMessagesBoxOpen: !this.getChannelByChannelId(
            channel,
            this.state.channels
          ).isMessagesBoxOpen,
          id: channel.data.id
        }
      ]
    });
  };

  getChannelByChannelId = (channel, channels) => {
    const foundedChannel = channels.find(chan => chan.id === channel.data.id);
    return foundedChannel;
  };

  render() {
    const { children } = this.props;

    return children({
      handleChatBoxToggle: this.onClick,
      isMessagesBoxOpen: this.getChannelByChannelId(
        this.props.channel,
        this.state.channels
      )
        ? this.getChannelByChannelId(this.props.channel, this.state.channels)
            .isMessagesBoxOpen
        : true
    });
  }
}

const CustomChatBoxContainer = withChatContext(ChatBoxContainer);

export default CustomChatBoxContainer;
