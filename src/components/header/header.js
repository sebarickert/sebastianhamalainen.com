import React from 'react';
import { Link } from 'gatsby';

import './header.scss';
import './page-logo.scss';

const Header = () => (
	<header className="header" role="banner">
		<div className="header__content container container--inset">
			<span className="page-logo">
				<Link to="/" className="page-logo__link">
					<svg viewBox="0 0 380 750">
						<title>Home</title>
						<rect className="a" y="50" width="60" height="500" />
						<rect className="b" x="20" width="60" height="500" />
						<rect className="c" x="150" y="150" width="60" height="500" />
						<rect className="d" x="170" y="100" width="60" height="500" />
						<rect className="e" x="300" y="250" width="60" height="500" />
						<rect className="f" x="320" y="200" width="60" height="500" />
					</svg>
				</Link>
			</span>
			<nav aria-label="Main Navigation">
				<ul className="menu-main">
					<li className="menu-main__item">
						<a href="#start" className="menu-main__link is-active">
							Start
						</a>
					</li>
					<li className="menu-main__item">
						<a href="#about" className="menu-main__link">
							About
						</a>
					</li>
					<li className="menu-main__item">
						<a href="#work" className="menu-main__link">
							Work
						</a>
					</li>
					<li className="menu-main__item">
						<a href="#contact" className="menu-main__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
);

export default Header;
