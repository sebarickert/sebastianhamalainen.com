import React from 'react';

import ButtonInternal from './button.internal';
import ButtonExternal from './button.external';
import ButtonPlain from './button.plain';
import './button.scss';

const Button = ({
  linkTo, className = '', linkTargetType, children, noLink, onClick, primary, secondary, large, filter,
}) => {
  if (primary) {
    className += ' button--primary';
  }

  if (secondary) {
    className += ' button--secondary';
  }

  if (large) {
    className += ' button--large';
  }

  if (filter) {
    className += ' button--filter';
  }
  // const links = document.querySelectorAll('a');
  // [...links].forEach((link) => {
  //   link.style.color = 'pink';
  // });

  let cleanButtonText;

  if (Array.isArray(children)) {
    // eslint-disable-next-line prefer-destructuring
    cleanButtonText = children[0];
  }

  const buttonProps = {
    linkTo, className, children, onClick, cleanButtonText,
  };

  if (linkTargetType === 'external') {
    return <ButtonExternal {...buttonProps} />;
  } if (linkTargetType !== 'external' && !noLink) {
    return <ButtonInternal {...buttonProps} />;
  }

  return <ButtonPlain {...buttonProps} />;
};

export default Button;
