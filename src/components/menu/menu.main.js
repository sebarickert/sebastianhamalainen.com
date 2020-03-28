import React from 'react';
import { Link } from 'gatsby';

const MenuMain = ({ vertical }) => (
  <ul className={`menu-main ${vertical ? 'menu-main--vertical' : ''}`}>
    <li className="menu-main__item">
      <Link to="/" className="menu-main__link" activeClassName="is-active">
        <span>Home</span>
      </Link>
    </li>
    <li className="menu-main__item">
      <Link to="/about" className="menu-main__link" activeClassName="is-active" partiallyActive>
        <span>About</span>
      </Link>
    </li>
    <li className="menu-main__item">
      <Link to="/portfolio" className="menu-main__link" activeClassName="is-active" partiallyActive>
        <span>Portfolio</span>
      </Link>
    </li>
    <li className="menu-main__item">
      <Link to="/blog" className="menu-main__link" activeClassName="is-active" partiallyActive>
        <span>Blog</span>
      </Link>
    </li>
    <li className="menu-main__item">
      <Link to="/snippets" className="menu-main__link" activeClassName="is-active" partiallyActive>
        <span>Snippets</span>
      </Link>
    </li>
  </ul>
);

export default MenuMain;
