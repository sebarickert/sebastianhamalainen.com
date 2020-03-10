import React from 'react';

import Logo from '../logo/logo';
import Menu from '../menu/menu';
import Container from '../container/container';

import './header.scss';

const Header = () => (
  <header className="header" role="banner">
    <Container className="header__content">
      <Logo />
      <Menu />
    </Container>
  </header>
);

export default Header;
