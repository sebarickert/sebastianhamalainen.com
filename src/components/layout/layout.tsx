import * as React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
