import React from 'react';
import { Link } from 'gatsby';

import './button.scss';

const Button = ({
  linkTo, className, linkTargetType, children,
}) => (
  linkTargetType !== 'external' ? (
    <Link to={linkTo} className={`button ${className || ''}`} title={children}>
      <span className="button__inner">
        {children}
      </span>
    </Link>
  ) : (
    <a
      href={linkTo}
      className={`button ${className || ''}`}
      title={children}
    >
      <span className="button__inner">
        {children}
      </span>
    </a>
  )
);

export default Button;
