import React from 'react';
import { Link } from 'gatsby';

import Button from '../button/button';
import './portfolio-teaser.scss';

const PortfolioTeaser = ({
  title, date, teaser_image: teaserImage, lead, slug,
}) => {
  const { src: imageSrc } = teaserImage.childImageSharp.fluid;
  return (
    <article className="portfolio-teaser">
      <div className="portfolio-teaser__container">
        <img className="portfolio-teaser__image" src={imageSrc} alt="" role="presentation" />
      </div>
      <div className="portfolio-teaser__content">
        <h2 className="portfolio-teaser__heading">
          <Link to={slug} className="portfolio-teaser__link">
            <span>{title}</span>
          </Link>
        </h2>
        {date ? (
          <span className="portfolio-teaser__date" role="presentation">
            {date}
          </span>
        ) : (
          ''
        )}
        <p className="portfolio-teaser__lead">{lead}</p>
      </div>
      <Button linkTo={slug} buttonClass="mt--2">
        Read more
      </Button>
    </article>
  );
};

export default PortfolioTeaser;
