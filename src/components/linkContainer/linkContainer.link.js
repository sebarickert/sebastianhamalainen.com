import React from 'react';

const LinkContainerLink = ({ linkTarget, linkContainerLinkClass, children }) => {
	return (
		<a
			href={linkTarget}
			className={`link-container__link ${linkContainerLinkClass ? linkContainerLinkClass : ''}`}
			title={children}
		>
			{children}
		</a>
	);
};

export default LinkContainerLink;
