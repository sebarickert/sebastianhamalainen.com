import React from 'react';

import './container.scss';

const Container = ({ children, className, useInset }) => (
  <div className={`container ${useInset !== false ? 'container--inset' : ''} ${className || ''}`}>{children}</div>
);

export default Container;
