import React from 'react';
import { Link } from 'gatsby';

const ButtonInternal = ({
  linkTo, className, children, cleanButtonText,
}) => (
  <Link to={linkTo} className={`button ${className || ''}`} title={cleanButtonText || children} aria-label={cleanButtonText || children}>
    <span className="button__inner">
      {Array.isArray(children) ? children.map(child => (typeof child === 'string' ? <span>{child}</span> : child)) : children}
    </span>
  </Link>
);

export default ButtonInternal;
