import React from 'react';
import { Link } from 'gatsby';

import Container from '../container/container';
import Spacer from '../spacer/spacer';
import './introduction.scss';

const Introduction = ({ className }) => (
  <div className={`introduction ${className || ''}`}>
    <Container variation="small">
      <Spacer>
        <h1 className="introduction__heading">
          Front-end Developer located in Helsinki, Finland. Web Design and JS enthusiast, also a so-called gym rat. I like
          to play around with CSS.
        </h1>
        <h2 className="introduction__lead">
          <Link className="introduction__link" to="/about">{'Find more about me -->'}</Link>
        </h2>
      </Spacer>
    </Container>
  </div>
);

export default Introduction;
