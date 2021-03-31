import React, { useState } from "react";

import MenuDesktop from "./menu.desktop";
import MenuMobile from "./menu.mobile";
import MenuToggle from "./menu.toggle";

const Menu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <MenuToggle isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <MenuMobile isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <MenuDesktop />
    </nav>
  );
};

export default Menu;
