import React from 'react';
import { Link } from 'gatsby';

import './button.scss';

const Button = ({ linkTo, buttonClass, children }) => (
  <Link to={linkTo} className={`button ${buttonClass ? buttonClass : ''}`}>
    {children}
  </Link>
);

export default Button;
