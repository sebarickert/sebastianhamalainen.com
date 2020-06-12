import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';
import placeholderImage from '../../images/blog-placeholder.jpg';

const BlogTeaser = ({
  title, slug, excerpt, teaser_image: teaserImage = '',
}) => {
  const imageSrc = teaserImage ? teaserImage.childImageSharp.fixed.src : placeholderImage;
  return (
    <article className="blog-teaser">
      <img className="blog-teaser__image" src={imageSrc} alt="" role="presentation" />
      <header>
        <h2 className="blog-teaser__heading">
          <Link to={slug} className="blog-teaser__link">
            <span>{title}</span>
          </Link>
        </h2>
      </header>
      <p className="blog-teaser__lead mt--2">{excerpt}</p>
    </article>
  );
};

export default BlogTeaser;
