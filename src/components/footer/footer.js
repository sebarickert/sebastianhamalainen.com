import React from 'react';

import Container from '../container/container';
import MenuMain from '../menu/menu.main';
import MenuSome from '../menu/menu.some';

import './footer.scss';
import './menu-footer.scss';

const Footer = () => (
  <footer id="contact" className="footer">
    <Container className="footer__container">
      <div className="footer__item footer__item--first">
        <h2 className="footer__heading">Contact</h2>
        <div className="footer__text">
          <p>If you want to contact me, shoot me a message at contact@hamse.fi or find me on different social media platforms.</p>
          <p>© 2020 Sebastian. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__item">
        <h2 className="footer__heading">Menu</h2>
        <MenuMain vertical />
      </div>
      <div className="footer__item footer__item--last">
        <h2 className="footer__heading">Find me on</h2>
        <MenuSome vertical />
      </div>
    </Container>
  </footer>
);

export default Footer;
