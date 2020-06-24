import React from 'react';

import Button from '../button/button';
import IconArrowRight from '../../assets/icon--arrow--right.svg';
import './portfolio-teaser.scss';

const PortfolioTeaser = ({
  title, teaser_image: teaserImage, lead, slug, stack,
}) => {
  const { src: imageSrc } = teaserImage.childImageSharp.fluid;
  return (
    <article className="portfolio-teaser">
      <img className="portfolio-teaser__image" src={imageSrc} alt="" role="presentation" />
      <div className="portfolio-teaser__content">
        <header>
          <h2 className="portfolio-teaser__heading">
            <span>{title}</span>
          </h2>
        </header>
        <p className="portfolio-teaser__lead">{lead}</p>
        <footer>
          {stack && (
          <ul className="stack-list">
            {stack.sort().map(item => <li className="stack-list__item" key={item}>{item}</li>)}
          </ul>
          )}
          <Button secondary linkTo={slug}>
            Read more
            <IconArrowRight />
          </Button>
        </footer>
      </div>
    </article>
  );
};

export default PortfolioTeaser;
