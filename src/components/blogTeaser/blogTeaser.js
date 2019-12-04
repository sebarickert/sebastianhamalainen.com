import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';

const BlogTeaser = ({ data }) => {
  const { node } = data;
  const { frontmatter, fields, excerpt } = node;
  const { title, date } = frontmatter;
  return (
    <article className="blog-teaser">
      <h1 className="blog-teaser__heading">
        <Link to={`/blog/${fields.slug}`} className="blog-teaser__link">
          <span>{title}</span>
        </Link>
      </h1>
      <span className="blog-teaser__published">{date}</span>
      <p className="blog-teaser__lead">{excerpt}</p>
    </article>
  );
};

export default BlogTeaser;
