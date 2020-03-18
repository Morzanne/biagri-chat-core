import React, { Component } from 'react';

import { EventHandler } from '../../lib/eventHandler';
import NavbarChannelListButton from './NavbarChannelListButton';

class NavbarChannelListButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isChatBoxOpen: null, handleChatBoxToggle: null };
    EventHandler.subscribe('openChat', ({ currentChatBoxState, onClick }) =>
      this.setState({
        isChatBoxOpen: currentChatBoxState,
        handleChatBoxToggle: onClick
      })
    );
  }

  render() {
    return <NavbarChannelListButton onClick={this.state.handleChatBoxToggle} />;
  }
}

export default NavbarChannelListButtonContainer;
