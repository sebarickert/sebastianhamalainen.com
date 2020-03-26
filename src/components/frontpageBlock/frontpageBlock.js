import React from 'react';

import Container from '../container/container';
import Heading from '../heading/heading';
import Button from '../button/button';
import './frontpage-block.scss';

const FrontpageBlock = ({
  blockComponent, blockComponentClass, blockHeadingClass, moreButton, children,
}) => {
  const BlockComponent = blockComponent;

  return (
    <div className={`frontpage-block ${blockComponentClass || ''}`}>
      <Container>
        <div className="frontpage-block__header">
          <Heading className={blockHeadingClass}>{children}</Heading>
          <Button primary linkTo={moreButton.url}>{moreButton.text}</Button>
        </div>
        <BlockComponent />
      </Container>
    </div>
  );
};

export default FrontpageBlock;
