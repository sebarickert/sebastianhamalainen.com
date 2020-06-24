import React, { useState, useEffect } from 'react';

import MenuMain from './menu.main';
import IconHamburger from '../../assets/icon--hamburger.svg';
import IconCross from '../../assets/icon--cross.svg';

import './menu-main.scss';

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
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={!!isOpen}
        type="button"
        onClick={toggle}
      >
        {isOpen ? <IconCross /> : <IconHamburger />}
      </button>
      <nav className={`overlay-menu js-overlay-menu ${isOpen ? 'is-open' : ''}`} aria-label="Main Navigation" aria-hidden={!isOpen}>
        <MenuMain />
      </nav>
    </React.Fragment>
  );
};

export default Menu;
