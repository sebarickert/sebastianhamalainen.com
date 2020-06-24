import React from 'react';

import './spacer.scss';

const Spacer = ({
  children, large,
}) => <div className={`spacer ${large ? 'spacer--large' : ''}`}>{children}</div>;

export default Spacer;
