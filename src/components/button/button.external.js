import React from 'react';

const ButtonExternal = ({
  linkTo, className, children, cleanButtonText,
}) => (
  <a href={linkTo} className={`button ${className || ''}`} title={cleanButtonText || children} aria-label={cleanButtonText || children}>
    <span className="button__inner">
      {Array.isArray(children) ? children.map(child => (typeof child === 'string' ? <span>{child}</span> : child)) : children}
    </span>
  </a>
);

export default ButtonExternal;
