import React from 'react';

import './spacer.scss';

const Spacer = ({
  children, slimMobile, onlyBottom, large,
}) => <div className={`spacer ${slimMobile ? 'spacer--slim' : ''} ${onlyBottom ? 'spacer--bottom' : ''} ${large ? 'spacer--large' : ''}`}>{children}</div>;

export default Spacer;
