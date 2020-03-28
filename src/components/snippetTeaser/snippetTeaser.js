import React from 'react';
import { Link } from 'gatsby';

import './snippet-teaser.scss';

const SnippetTeaser = ({
  title, date, slug, category,
}) => (
  <article className="snippet-teaser">
    <header>
      <h2 className="snippet-teaser__heading">
        <Link to={slug} className="snippet-teaser__link">
          <span>{title}</span>
        </Link>
      </h2>
    </header>
    <footer>
      <div className="snippet-teaser__category">
        <span>Category</span>
        <span>{category}</span>
      </div>
      <div className="snippet-teaser__published">
        <span>Last updated</span>
        <span>{date}</span>
      </div>
    </footer>
  </article>
);
export default SnippetTeaser;
