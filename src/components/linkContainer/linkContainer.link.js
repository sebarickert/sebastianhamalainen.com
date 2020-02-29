import React from 'react';

const LinkContainerLink = ({ linkTarget, linkContainerLinkClass, children }) => (
  <a
    href={linkTarget}
    className={`link-container__link ${linkContainerLinkClass || ''}`}
    title={children}
  >
    {children}
  </a>
);

export default LinkContainerLink;
