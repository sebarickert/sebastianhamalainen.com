import React from 'react';

import MenuMainItem from './menu.main.item';

const MenuMain = ({ vertical }) => (
  <ul className={`menu-main ${vertical ? 'menu-main--vertical' : ''}`}>
    <MenuMainItem link="/" className="is-home">Home</MenuMainItem>
    <MenuMainItem link="/about" className="is-misc">About</MenuMainItem>
    <MenuMainItem link="/portfolio" className="is-portfolio">Portfolio</MenuMainItem>
    <MenuMainItem link="/blog" className="is-blog">Blog</MenuMainItem>
    <MenuMainItem link="/snippets" className="is-snippets">Snippets</MenuMainItem>
  </ul>
);

export default MenuMain;
