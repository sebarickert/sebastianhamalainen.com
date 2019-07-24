import React from 'react';

import Container from '../container/container';
import './frontpage-block.scss';

const FrontpageBlock = ({ blockComponent, children }) => {
	const BlockComponent = blockComponent;

	return (
		<div className="frontpage-block">
			<Container>
				<h2 className="h1 main-subheading">{children}</h2>
				<BlockComponent />
			</Container>
		</div>
	);
};

export default FrontpageBlock;
