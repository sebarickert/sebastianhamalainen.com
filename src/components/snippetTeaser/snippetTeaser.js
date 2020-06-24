import React from 'react';
import { Link } from 'gatsby';

import IconLabelImportant from '../../assets/icon--label--important.svg';
import IconPen from '../../assets/icon--pen.svg';
import './snippet-teaser.scss';

const SnippetTeaser = ({
  title, date, slug, category, excerpt,
}) => (
  <article className="snippet-teaser">
    <Link to={slug} className="snippet-teaser__link">
      <header>
        <h2 className="snippet-teaser__heading">
          <span>{title}</span>
        </h2>
      </header>
      <p className="snippet-teaser__description">
        {excerpt}
      </p>
      <footer>
        <ul className="snippet-teaser__details">
          <li className="snippet-teaser__detail">
            <span aria-label="Category">
              <IconLabelImportant />
              {category}
            </span>
          </li>
          <li className="snippet-teaser__detail">
            <span aria-label="Last modified">
              <IconPen />
              {date}
            </span>
          </li>
        </ul>
      </footer>
    </Link>
  </article>
);
export default SnippetTeaser;
