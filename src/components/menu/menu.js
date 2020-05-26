import React, { useState, useEffect } from 'react';

import MenuMain from './menu.main';

import './menu-main.scss';
import './hamburger.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Lock page scrolling when mobile menu is open.
    const bodyElement = document.querySelector('body');
    bodyElement.style.overflow = isOpen ? 'hidden' : 'initial';
  });

  return (
    <React.Fragment>
      <button
        className="overlay-toggle"
        aria-label="menu"
        type="button"
        onClick={toggle}
      >
        <span className="overlay-toggle__label">{isOpen ? 'Close' : 'Menu'}</span>
        <span className={`overlay-toggle__hamburger js-overlay-toggle ${isOpen ? 'is-active' : ''}`}>
          <span className="hamburger" />
        </span>
      </button>
      <nav className={`overlay-menu js-overlay-menu ${isOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
        <MenuMain />
      </nav>
    </React.Fragment>
  );
};

export default Menu;
