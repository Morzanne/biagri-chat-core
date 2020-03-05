import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = ({ className: baseClassName, color, size, padding }) => {
  return (
    <div style={{ padding: padding + 'px' }}>
      <FontAwesomeIcon
        style={{ color: color }}
        size={size}
        className={baseClassName}
        icon={faSpinner}
        spin
      />
    </div>
  );
};
Spinner.defaultProps = {
  color: 'black',
  size: '1x',
};

export default Spinner;
