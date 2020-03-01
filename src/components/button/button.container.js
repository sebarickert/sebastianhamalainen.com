import React from 'react';


const ButtonContainer = ({ buttonContainerClass, children }) => <div className={`button-container ${buttonContainerClass || ''}`}>{children}</div>;

export default ButtonContainer;
