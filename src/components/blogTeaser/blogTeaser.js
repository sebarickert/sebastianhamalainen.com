import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';

const BlogTeaser = ({ data }) => {
  const { node } = data;
  const { frontmatter, fields, excerpt } = node;
  const { title, date } = frontmatter;
  return (
    <div className="blog-teaser">
      <Link to={`/blog/${fields.slug}`} className="blog-teaser__link">
        <h2 className="blog-teaser__heading">
          <span>{title}</span>
        </h2>
        <span className="blog-teaser__published">{date}</span>
        <p className="blog-teaser__lead">{excerpt}</p>
      </Link>
    </div>
  );
};

export default BlogTeaser;
