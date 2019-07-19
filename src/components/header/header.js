import React from 'react';

import Logo from '../logo/logo';
import Menu from '../menu/menu';

import './header.scss';

const Header = () => (
	<header className="header" role="banner">
		<div className="header__content container container--inset">
			<Logo />
			<Menu />
		</div>
	</header>
);

export default Header;
