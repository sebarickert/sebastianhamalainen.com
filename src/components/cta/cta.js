import React from 'react';

import CtaBlock from './cta.block';
import './cta.scss';

const Cta = ({
  children, className, linkTo, linkToText, primary, secondary,
}) => (
  <div className={`cta ${primary ? 'cta--primary' : ''} ${secondary ? 'cta--secondary' : ''}`}>
    <CtaBlock className={className} linkTo={linkTo} linkToText={linkToText}>{children}</CtaBlock>
  </div>
);

export default Cta;
