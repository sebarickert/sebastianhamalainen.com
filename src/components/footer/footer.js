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
      <div className="footer__header container container--inset">
        <h2 className="footer__heading">
          <a href={`mailto:${data.site.siteMetadata.email}`} className="footer__link">
            {data.site.siteMetadata.email}
          </a>
        </h2>
      </div>
      <div className="footer__content container container--inset">
        <ul className="menu-footer">
          <li className="menu-footer__item">
            <a href={data.site.siteMetadata.twitter} className="menu-footer__link">
              <span>Twitter</span>
            </a>
          </li>
          <li className="menu-footer__item">
            <a href={data.site.siteMetadata.github} className="menu-footer__link">
              <span>Github</span>
            </a>
          </li>
          <li className="menu-footer__item">
            <a href={data.site.siteMetadata.linkedin} className="menu-footer__link">
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <span className="footer__copyright">© 2019 Sebastian. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
