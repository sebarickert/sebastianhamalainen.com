import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.scss';

const Layout = ({ className, children }) => (
  <React.Fragment>
    <div className="sticky-footer">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
