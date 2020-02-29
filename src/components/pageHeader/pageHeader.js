import React from 'react';

import './page-header.scss';

const PageHeader = ({ title, children }) => (
  <div className="page-header">
    <h1 className="page-header__title">{title}</h1>
    <h2 className="page-header__lead" dangerouslySetInnerHTML={{ __html: children }} />
  </div>
);

export default PageHeader;
