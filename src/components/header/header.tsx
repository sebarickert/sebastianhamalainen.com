import { Link } from "gatsby";
import * as React from "react";
import Container from "../container/container";
import Logo from "../logo/logo";
import Menu from "../menu/menu";

const Header = (): JSX.Element => (
  <header>
    <Container className="py-6 flex justify-between items-center">
      <Link
        to="/"
        className="inline-flex focus:outline-none focus:ring ring-offset-2 rounded"
      >
        <Logo />
      </Link>
      <Menu />
    </Container>
  </header>
);

export default Header;
