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
      <div className="footer__content">
        <div className="footer__item footer__item--top container container--inset">
          <h4 className="footer__heading">
            <a href={`mailto:${data.site.siteMetadata.email}`} className="footer__link footer__link--large">
              {data.site.siteMetadata.email}
            </a>
          </h4>
        </div>
        <div className="divider" />
        <div className="footer__item footer__item--bottom container container--inset">
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
          <span className="footer__copyright">© 2019 Sebastian. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
