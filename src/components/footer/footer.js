import React from 'react';

import Container from '../container/container';
import MenuMainFooter from '../menu/menu.main.footer';
import MenuSome from '../menu/menu.some';

import './footer.scss';
import './menu-footer.scss';

const Footer = () => (
  <footer id="contact" className="footer">
    <Container className="footer__container">
      <div className="footer__item footer__item--first">
        <h2 className="footer__heading h3">Contact</h2>
        <div className="footer__text">
          <p>If you want to contact me, shoot me a message at contact@hamse.fi or find me on different social media platforms.</p>
          <p>© 2020 Sebastian. All Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__item">
        <h2 className="footer__heading h5">Menu</h2>
        <MenuMainFooter />
      </div>
      <div className="footer__item footer__item--last">
        <h2 className="footer__heading h5">Social</h2>
        <MenuSome />
      </div>
    </Container>
  </footer>
);

export default Footer;
