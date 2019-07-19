import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = (props) => (
	<React.Fragment>
		<Header />
		{props.children}
		<Footer />
	</React.Fragment>
);

export default Layout;
