import React from "react";
import { Link } from "gatsby";
import isExternalLink from "../../utils/isExternalLink";
import { globalHistory } from "@reach/router";

interface MenuLinkProps {
  children: string;
  link: string;
}

const MenuLink = ({ children, link }: MenuLinkProps): JSX.Element => {
  const path = globalHistory.location.pathname;
  const isLinkActive = path === link;
  const pathFirstLinkItem = path.split('/').filter(item => item)[0];
  const linkFirstLinkItem = link.split('/').filter(item => item)[0];
  const isLinkPartiallyActive = pathFirstLinkItem === linkFirstLinkItem;

  const elementClasses = [
    "block -mx-2 px-2 py-4 text-2xl font-semibold hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring rounded lg:text-lg lg:mx-0 lg:-my-3 lg:py-3 lg:px-4",
  ];

  if (!isLinkActive && !isLinkPartiallyActive) {
    elementClasses.push("text-gray-400");
  }

  if (isExternalLink(link)) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={elementClasses.join(" ")}
      >
        {children}
        <span className="sr-only">(link opens in a new tab)</span>
      </a>
    );
  }
  
  if (link === "/") {
    return (
      <Link to={link} className={elementClasses.join(" ")} activeClassName="text-black">
        {children}
      </Link>
    );
  }

  return (
    <Link to={link} className={elementClasses.join(" ")} activeClassName="text-black" partiallyActive>
      {children}
    </Link>
  );
};

export default MenuLink;
