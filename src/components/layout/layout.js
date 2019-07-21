import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import './base.scss';
import './typography.scss';

const Layout = ({ children }) => (
	<React.Fragment>
		<Header />
		<main>{children}</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
