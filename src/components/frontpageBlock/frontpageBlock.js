import React from 'react';

import Container from '../container/container';
import './frontpage-block.scss';

const FrontpageBlock = ({ blockComponent, blockComponentClass, blockHeadingClass, blockSubHeadingLead, children }) => {
	const BlockComponent = blockComponent;

	return (
		<div className={`frontpage-block ${blockComponentClass ? blockComponentClass : ''}`}>
			<Container>
				<h2 className={`h1 main-subheading ${blockHeadingClass ? blockHeadingClass : ''}`}>{children}</h2>
				{blockSubHeadingLead ? (
					<h3
						className={`main-subheading-lead ${blockHeadingClass ? blockHeadingClass : ''}`}
						role="presentation"
					>
						{blockSubHeadingLead}
					</h3>
				) : (
					''
				)}
				<BlockComponent />
			</Container>
		</div>
	);
};

export default FrontpageBlock;
