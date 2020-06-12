import React from 'react';
import { Link } from 'gatsby';

import Container from '../container/container';
import Spacer from '../spacer/spacer';
import './introduction.scss';

const Introduction = ({ className }) => (
  <div className={`introduction ${className || ''}`}>
    <Container variation="small">
      <Spacer large>
        <h1 className="introduction__heading">
          Front-end Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I like
          to play around with CSS.
        </h1>
      </Spacer>
    </Container>
  </div>
);

export default Introduction;
