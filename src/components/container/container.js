import React from 'react';

import './container.scss';

const Container = (props) => <div className={`container container--inset`}>{props.children}</div>;

export default Container;
