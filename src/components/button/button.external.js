import React from 'react';

const ButtonExternal = ({ linkTo, className, children }) => (
  <a href={linkTo} className={`button ${className || ''}`} title={children}>
    <span className="button__inner">{children}</span>
  </a>
);

export default ButtonExternal;
