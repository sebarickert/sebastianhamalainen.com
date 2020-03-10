import React from 'react';
import { Link } from 'gatsby';

const ButtonInternal = ({ linkTo, className, children }) => (
  <Link to={linkTo} className={`button ${className || ''}`} title={children}>
    <span className="button__inner">{children}</span>
  </Link>
);

export default ButtonInternal;
