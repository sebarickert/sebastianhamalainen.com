import React from 'react';
import { Link } from 'gatsby';

const MenuMainItem = ({ link, className, children }) => {
  if (link !== '/') {
    return (
      <li className="menu-main__item">
        <Link to={link} className={`menu-main__link ${className || ''}`} activeClassName="is-active" partiallyActive>
          <span>{children}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="menu-main__item">
      <Link to={link} className={`menu-main__link ${className || ''}`} activeClassName="is-active">
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default MenuMainItem;
