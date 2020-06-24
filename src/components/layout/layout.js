import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.scss';

const Layout = ({ className, children }) => (
  <>
    <div className="sticky-footer">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
