import React from 'react';

const ButtonContainer = ({ className, children }) => <div className={`button-container ${className || ''}`}>{children}</div>;

export default ButtonContainer;
