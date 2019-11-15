import React from 'react';
import { Link } from 'gatsby';

import './button.scss';

var isExternal = (url) => {
  return !(
    window.location.href.replace('http://', '').replace('https://', '').split('/')[0] ===
    url.replace('http://', '').replace('https://', '').split('/')[0]
  );
};

const Button = ({ linkTo, buttonClass, children }) =>
  !isExternal(linkTo) ? (
    <Link to={linkTo} className={`button ${buttonClass ? buttonClass : ''}`}>
      {children}
    </Link>
  ) : (
    <a href={linkTo} className={`button ${buttonClass ? buttonClass : ''}`}>
      {children}
    </a>
  );

export default Button;
