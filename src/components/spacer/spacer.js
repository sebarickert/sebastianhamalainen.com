import React from 'react';

import './spacer.scss';

const Spacer = ({
  children, slimMobile, onlyBottom,
}) => <div className={`spacer ${slimMobile ? 'spacer--slim' : ''} ${onlyBottom ? 'spacer--bottom' : ''}`}>{children}</div>;

export default Spacer;
