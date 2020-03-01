import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Divider from '../divider/divider';

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
        <Divider />
        <div className="footer__item footer__item--bottom container container--inset">
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
      </div>
    </footer>
  );
};

export default Footer;
