import React from 'react';
import { Link } from 'gatsby';

import './button.scss';

const Button = ({
  linkTo, buttonClass, linkTargetType, children,
}) => (
  linkTargetType !== 'external' ? (
    <Link to={linkTo} className={`button ${buttonClass || ''}`}>
      {children}
    </Link>
  ) : (
    <a
      href={linkTo}
      className={`button ${buttonClass || ''}`}
      title={children}
    >
      {children}
    </a>
  )
);

export default Button;
