import React from 'react';
import { Link } from 'gatsby';

import Button from '../button/button';
import './portfolio-teaser.scss';

const PortfolioTeaser = ({
  title, teaser_image: teaserImage, lead, slug,
}) => {
  const { src: imageSrc } = teaserImage.childImageSharp.fluid;
  return (
    <article className="portfolio-teaser">
      <div className="portfolio-teaser__section">
        <img className="portfolio-teaser__image" src={imageSrc} alt="" role="presentation" />
      </div>
      <div className="portfolio-teaser__section">
        <div className="portfolio-teaser__content">
          <header>
            <h2 className="portfolio-teaser__heading">
              <Link to={slug}>
                <span>{title}</span>
              </Link>
            </h2>
          </header>
          <p className="portfolio-teaser__lead">{lead}</p>
          <footer>
            <Button secondary linkTo={slug} className="mt--2">
              {'Read more -->'}
            </Button>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default PortfolioTeaser;
