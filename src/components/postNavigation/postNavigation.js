import React from 'react';

import PostNavigationLink from './postNavigation.link';
import './post-navigation.scss';

const PostNavigation = ({ next, previous, type }) => (
  <ul className="post-navigation">
    {previous && <li className="post-navigation__item post-navigation__item--previous"><PostNavigationLink {...previous.fields} type={type} previous /></li>}
    {next && <li className="post-navigation__item post-navigation__item--next"><PostNavigationLink {...next.fields} type={type} next /></li>}
  </ul>
);

export default PostNavigation;
