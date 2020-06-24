import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';

const BlogTeaser = ({
  title, slug, excerpt, teaser_image: teaserImage = '',
}) => {
  const imageSrc = teaserImage ? teaserImage.childImageSharp.fixed.src : '';
  return (
    <article className="blog-teaser">
      <Link to={slug} className="blog-teaser__link">
        {teaserImage ? <img className="blog-teaser__image" src={imageSrc} alt="" role="presentation" /> : <div className="blog-teaser__image blog-teaser__image--empty" />}
        <header>
          <h2 className="blog-teaser__heading">
            <span>{title}</span>
          </h2>
        </header>
        <p className="blog-teaser__lead">{excerpt}</p>
      </Link>
    </article>
  );
};

export default BlogTeaser;
