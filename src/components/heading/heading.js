import React from 'react';

import './heading.scss';

const Heading = ({
  headingLevel = 2, className, children, center,
}) => {
  const HeadingElement = `h${headingLevel}`;

  if (center) {
    className += ' heading--center';
  }

  return (
    <HeadingElement className={`heading heading--level-${headingLevel} ${className || ''}`}>{children}</HeadingElement>
  );
};

export default Heading;
