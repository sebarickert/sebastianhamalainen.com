import React from 'react';

import './heading.scss';

const Heading = ({ headingLevel = 2, className, children }) => {
  const HeadingElement = `h${headingLevel}`;
  return (
    <HeadingElement className={`heading heading--level-${headingLevel} ${className || ''}`}>{children}</HeadingElement>
  );
};

export default Heading;
