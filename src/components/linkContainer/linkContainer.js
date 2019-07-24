import React from 'react';

import './link-container.scss';

const LinkContainer = ({ linkContainerClass, children }) => {
	return <div className={`link-container ${linkContainerClass ? linkContainerClass : ''}`}>{children}</div>;
};

export default LinkContainer;
