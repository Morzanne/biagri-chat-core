import React from 'react';

const ForegroundGuestMessage = ({ onClose }) => {
  return (
    <div className="foregroundGuestMessageWrapper">
      <div className="foregroundOverlay"></div>
      <div className="foreground">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ForegroundGuestMessage;
