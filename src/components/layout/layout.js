import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="sticky-footer">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
