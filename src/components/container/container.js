import React from 'react';

import './container.scss';

const Container = ({ children, containerClass }) => (
  <div className={`container container--inset ${containerClass || ''}`}>{children}</div>
);

export default Container;
