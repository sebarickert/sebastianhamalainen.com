import React from 'react';

import Header from '../header/header';
import './container.scss';

const Container = (props) => (
	<React.Fragment>
		<Header />
		<div className="container container--inset">{props.children}</div>
	</React.Fragment>
);

export default Container;
