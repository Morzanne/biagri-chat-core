import React from 'react';
import FontAwesome from 'react-fontawesome';

const Spinner = ({ className: baseClassName, color, size, padding }) => {
  return (
    <div style={{ padding: padding + 'px' }}>
      <FontAwesome
        style={{ color: color }}
        size={size}
        className={baseClassName}
        name="spinner"
        spin
      />
    </div>
  );
};
Spinner.defaultProps = {
  color: 'black',
  size: '3x',
  padding: 100
};

export default Spinner;
