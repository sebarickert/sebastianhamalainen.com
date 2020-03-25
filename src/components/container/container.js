import React from 'react';

import './container.scss';

const Container = ({
  children, className, variation,
}) => (
  <div className={`container ${variation ? `container--${variation}` : ''} ${className || ''}`}>{children}</div>
);

export default Container;
