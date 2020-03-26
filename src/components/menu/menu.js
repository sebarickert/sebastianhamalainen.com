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
      <div className={`overlay-toggle-container js-overlay-toggle-container ${isOpen ? 'is-active' : ''}`}>
        <span className="overlay-toggle-label js-overlay-toggle-label">{isOpen ? 'Close' : 'Menu'}</span>
        <button
          className={`overlay-toggle js-overlay-toggle ${isOpen ? 'is-active' : ''}`}
          aria-label="menu"
          type="button"
          onClick={toggle}
        >
          <span tabIndex="-1">
            <div className="hamburger" />
          </span>
        </button>
      </div>
      <nav className={`overlay-menu js-overlay-menu ${isOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
        <MenuMain />
      </nav>
    </React.Fragment>
  );
};

export default Menu;
