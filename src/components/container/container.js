import React from 'react';

import './container.scss';

const Container = ({
  children, className, small, medium,
}) => (
  <div className={`container ${small ? 'container--small' : ''} ${medium ? 'container--medium' : ''} ${className || ''}`}>{children}</div>
);

export default Container;
