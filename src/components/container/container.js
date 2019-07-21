import React from 'react';

import './container.scss';

const Container = ({ children }) => <div className={`container container--inset`}>{children}</div>;

export default Container;
