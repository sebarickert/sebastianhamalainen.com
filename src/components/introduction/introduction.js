/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Container from '../container/container';
import Spacer from '../spacer/spacer';
import Button from '../button/button';
import IconArrowRight from '../../assets/icon--arrow--right.svg';
import './introduction.scss';

const Introduction = ({ className }) => (
  <div className={`introduction ${className || ''}`}>
    <Container>
      <Spacer large>
        <div className="introduction__container">
          <h1 className="introduction__heading">
            Hey, I'm Sebastian.
          </h1>
          <h2 className="introduction__lead">
            Front-end Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I like
            to play around with CSS.
          </h2>
          <Button className="introduction__link" linkTo="/portfolio" primary large>
            Checkout my work
            <IconArrowRight />
          </Button>
        </div>
      </Spacer>
    </Container>
  </div>
);

export default Introduction;
