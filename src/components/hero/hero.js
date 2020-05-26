import React from 'react';

import Container from '../container/container';
import Spacer from '../spacer/spacer';

import './hero.scss';

const Hero = ({ title, children, className }) => (
  <Spacer>
    <Container className={`hero ${className || ''}`} variation="medium">
      <h1 className="hero__title">
        <span>{title}</span>
      </h1>
      <h2 className="hero__lead" dangerouslySetInnerHTML={{ __html: children }} />
    </Container>
  </Spacer>

);

export default Hero;
