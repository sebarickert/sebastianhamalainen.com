import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const MenuSome = ({ vertical }) => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        twitter
        linkedin
        github
      }
    }
  }
`);

  const {
    twitter, github, linkedin,
  } = data.site.siteMetadata;

  return (
    <ul className={`menu-main ${vertical ? 'menu-main--vertical' : ''}`}>
      <li className="menu-main__item">
        <a href={twitter} className="menu-main__link"><span>Twitter</span></a>
      </li>
      <li className="menu-main__item">
        <a href={github} className="menu-main__link"><span>Github</span></a>
      </li>
      <li className="menu-main__item">
        <a href={linkedin} className="menu-main__link"><span>LinkedIn</span></a>
      </li>
    </ul>
  );
};

export default MenuSome;
