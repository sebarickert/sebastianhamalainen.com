import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
	<React.Fragment>
		<Header />
		<main>{children}</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
