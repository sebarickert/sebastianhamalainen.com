import React from 'react';

const ButtonPlain = ({ className, children, onClick }) => (
  <button type="button" className={`button ${className || ''}`} title={children} onClick={onClick}>
    <span className="button__inner">{children}</span>
  </button>
);

export default ButtonPlain;
