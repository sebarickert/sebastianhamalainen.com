import React from 'react';

const ButtonPlain = ({
  className, children, onClick, cleanButtonText,
}) => (
  <button type="button" className={`button ${className || ''}`} title={cleanButtonText || children} aria-label={cleanButtonText || children} onClick={onClick}>
    <span className="button__inner">
      {Array.isArray(children) ? children.map(child => (typeof child === 'string' ? <span>{child}</span> : child)) : children}
    </span>
  </button>
);

export default ButtonPlain;
