import React from "react";

import { ChannelList } from "stream-chat-react";

import ChannelPreviewContainer from "../../components/ChannelPreview/ChannelPreviewContainer";
import ChannelListContainer from "../../components/ChannelList/ChannelListContainer";

function ChannelPanel({ handleChatBoxToggle, isMessagesBoxOpen }) {
  return (
    <ChannelList
      List={ChannelListContainer}
      Preview={props => (
        <ChannelPreviewContainer
          {...props}
          handleChatBoxToggle={handleChatBoxToggle}
          isMessagesBoxOpen={isMessagesBoxOpen}
        />
      )}
    />
  );
}

export default ChannelPanel;
