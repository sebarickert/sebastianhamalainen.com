import React from 'react';

import './link-container.scss';

const LinkContainer = ({ linkContainerClass, children }) => <div className={`link-container ${linkContainerClass || ''}`}>{children}</div>;

export default LinkContainer;
