import * as React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import LayoutMdxWrapper from "./layout.mdxWrapper";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Header />
      <LayoutMdxWrapper>{children}</LayoutMdxWrapper>
    </div>
    <Footer />
  </div>
);

export default Layout;
