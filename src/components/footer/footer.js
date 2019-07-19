import React from 'react';

const Footer = () => (
	<footer id="contact" className="footer">
		<div className="footer__content container container--inset">
			<nav aria-label="Footer Navigation">
				<ul className="menu-footer">
					<li className="menu-footer__item">
						<a href="mailto:contact@hamse.fi" className="menu-footer__link h1">
							E-mail
						</a>
					</li>
					<li className="menu-footer__item">
						<a href="https://twitter.com/iamsebh" className="menu-footer__link h1">
							Twitter
						</a>
					</li>
					<li className="menu-footer__item">
						<a href="https://github.com/shamalainen" className="menu-footer__link h1">
							Github
						</a>
					</li>
					<li className="menu-footer__item">
						<a href="https://linkedin.com/in/sebastianhamalainen/" className="menu-footer__link h1">
							LinkedIn
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
);

export default Footer;
