import React from 'react';
import PT from 'prop-types';

const ChannelPreview = ({ onClick, channel }) => {
  return (
    <div>
      <button onClick={onClick}>{channel.data.id}</button>
    </div>
  );
};

export default ChannelPreview;
