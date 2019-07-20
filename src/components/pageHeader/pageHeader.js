import React from 'react';

import './page-header.scss';

const PageHeader = (props) => (
	<div className="page-header">
		<h1 className="page-header__title">{props.title}</h1>
		<h2 className="page-header__lead" dangerouslySetInnerHTML={{ __html: props.children }} />
	</div>
);

export default PageHeader;
