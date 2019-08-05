import React, { useState, useEffect } from 'react';

import Logo from '../logo/logo';
import Menu from '../menu/menu';
import Container from '../container/container';

import './header.scss';

const Header = () => {
	const [ isPageTop, setPageTop ] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setPageTop(window.pageYOffset !== 0 ? false : true);
		});
	});

	return (
		<header className={`header ${!isPageTop ? 'header--shadow' : ''}`} role="banner">
			<Container containerClass="header__content">
				<Logo />
				<Menu />
			</Container>
		</header>
	);
};

export default Header;
