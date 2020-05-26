import React from 'react';

import MenuMainItem from './menu.main.item';

const MenuMainFooter = () => (
  <ul className="menu-main menu-main--footer">
    <MenuMainItem link="/" className="is-home">Home</MenuMainItem>
    <MenuMainItem link="/about" className="is-misc">About</MenuMainItem>
    <MenuMainItem link="/portfolio" className="is-portfolio">Portfolio</MenuMainItem>
    <MenuMainItem link="/blog" className="is-blog">Blog</MenuMainItem>
    <MenuMainItem link="/snippets" className="is-snippets">Snippets</MenuMainItem>
  </ul>
);

export default MenuMainFooter;
