import React from 'react';
import { Link } from 'gatsby';

import Button from '../button/button';
import './blog-teaser.scss';

const BlogTeaser = ({ frontmatter, fields, excerpt }) => {
  const { title, date } = frontmatter;
  return (
    <article className="blog-teaser">
      <header>
        <h2 className="blog-teaser__heading">
          <Link to={fields.slug} className="blog-teaser__link">
            <span>{title}</span>
          </Link>
        </h2>
      </header>
      <p className="blog-teaser__lead mt--2">{excerpt}</p>
      <footer className="mt--2">
        <span className="blog-teaser__published">{date}</span>
      </footer>
      <Button linkTo={fields.slug} buttonClass="mt--2">Read more</Button>
    </article>
  );
};

export default BlogTeaser;
