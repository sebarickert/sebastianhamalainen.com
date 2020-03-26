import React from 'react';

import Container from '../container/container';
import Spacer from '../spacer/spacer';

import './hero.scss';

const Hero = ({ title, children, className }) => (
  <div className={`hero ${className || ''}`}>
    <Container variation="small">
      <Spacer>
        <h1 className="hero__title">
          <span>{title}</span>
        </h1>
        <h2 className="hero__lead" dangerouslySetInnerHTML={{ __html: children }} />
      </Spacer>
    </Container>
  </div>
);

export default Hero;
