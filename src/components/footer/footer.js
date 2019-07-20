import React from 'react';

import './footer.scss';
import './menu-footer.scss';

const Footer = () => (
	<footer id="contact" className="footer">
		<div className="footer__content container container--inset">
			<div className="footer__item">
				<h2 className="footer__heading">Get in touch</h2>
				<a href="mailto:contact@hamse.fi" className="footer__link">
					contact@hamse.fi
				</a>
			</div>
			<div className="footer__item">
				<h2 className="footer__heading">On the web</h2>
				<nav aria-label="Footer Navigation">
					<ul className="menu-footer">
						<li className="menu-footer__item">
							<a href="https://twitter.com/iamsebh" className="footer__link">
								Twitter
							</a>
						</li>
						<li className="menu-footer__item">
							<a href="https://github.com/shamalainen" className="footer__link">
								Github
							</a>
						</li>
						<li className="menu-footer__item">
							<a href="https://linkedin.com/in/sebastianhamalainen/" className="footer__link">
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<span className="footer__copyright">© 2019 Sebastian</span>
		</div>
	</footer>
);

export default Footer;
