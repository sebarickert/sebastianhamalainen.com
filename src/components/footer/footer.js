import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './footer.scss';
import './menu-footer.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					email
					twitter
					linkedin
					github
				}
			}
		}
	`);
	return (
		<footer id="contact" className="footer">
			<div className="footer__content container container--inset">
				<div className="footer__item">
					<h2 className="footer__heading">Get in touch</h2>
					<a href={`mailto:${data.site.siteMetadata.email}`} className="footer__link">
						{data.site.siteMetadata.email}
					</a>
				</div>
				<div className="footer__item">
					<h2 className="footer__heading">On the web</h2>
					<nav aria-label="Footer Navigation">
						<ul className="menu-footer">
							<li className="menu-footer__item">
								<a href={data.site.siteMetadata.twitter} className="footer__link">
									Twitter
								</a>
							</li>
							<li className="menu-footer__item">
								<a href={data.site.siteMetadata.github} className="footer__link">
									Github
								</a>
							</li>
							<li className="menu-footer__item">
								<a href={data.site.siteMetadata.linkedin} className="footer__link">
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
};

export default Footer;
