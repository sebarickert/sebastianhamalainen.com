import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';

const BlogTeaser = ({
  title, slug, excerpt, teaser_image: teaserImage = '',
}) => {
  const imageSrc = teaserImage ? teaserImage.childImageSharp.fixed.src : '';
  return (
    <article className="blog-teaser">
      {teaserImage ? <img className="blog-teaser__image" src={imageSrc} alt="" role="presentation" /> : <div className="blog-teaser__image blog-teaser__image--empty" />}
      <header>
        <h2 className="blog-teaser__heading">
          <Link to={slug} className="blog-teaser__link">
            <span>{title}</span>
          </Link>
        </h2>
      </header>
      <p className="blog-teaser__lead">{excerpt}</p>
    </article>
  );
};

export default BlogTeaser;
