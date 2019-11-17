import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';
import ArrowRightIcon from '../../assets/right-arrow.svg';

const BlogTeaser = ({ data }) => {
  const { node } = data;
  const { frontmatter, fields, excerpt } = node;
  const { title, date, image } = frontmatter;
  const imageSource = image ? image.childImageSharp.fluid.src : '';
  return (
    <div className="blog-teaser">
      <Link to={`/blog/${fields.slug}`} className="blog-teaser__link">
        <div className="blog-teaser__container">
          <img className="blog-teaser__image" src={imageSource} alt="" role="presentation" />
          <div className="blog-teaser__overlay">
            <ArrowRightIcon className="blog-teaser__icon" />
          </div>
        </div>
        <div className="blog-teaser__content">
          <h2 className="blog-teaser__heading">
            <span>{title}</span>
          </h2>
          <span className="blog-teaser__published">{date}</span>
          <p className="blog-teaser__lead">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogTeaser;
