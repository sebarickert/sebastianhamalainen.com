import React from 'react';
import { Link } from 'gatsby';

import './page-logo.scss';

const Logo = () => (
  <span className="page-logo">
    <Link to="/" className="page-logo__link">
      <svg viewBox="0 0 380 750">
        <title>Home</title>
        <rect className="a" y="50" width="60" height="500" />
        <rect className="b" x="20" width="60" height="500" />
        <rect className="c" x="150" y="150" width="60" height="500" />
        <rect className="d" x="170" y="100" width="60" height="500" />
        <rect className="e" x="300" y="250" width="60" height="500" />
        <rect className="f" x="320" y="200" width="60" height="500" />
      </svg>
    </Link>
  </span>
);

export default Logo;
