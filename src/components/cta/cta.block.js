import React from 'react';

import Container from '../container/container';
import Spacer from '../spacer/spacer';
import Heading from '../heading/heading';
import Button from '../button/button';
import './cta.scss';

const CtaBlock = ({
  children, className, linkTo, linkToText,
}) => (
  <div className={`cta-block ${className || ''}`}>
    <Container variation="small">
      <Spacer>
        <div className="cta-block__content">
          <Heading center noMargin>{children}</Heading>
          <Button linkTo={linkTo} className="mt--4" primary center>{linkToText}</Button>
        </div>
      </Spacer>
    </Container>
  </div>
);

export default CtaBlock;
