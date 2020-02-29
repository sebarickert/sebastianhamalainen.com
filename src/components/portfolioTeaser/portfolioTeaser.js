import React from 'react';
import { Link } from 'gatsby';

import './portfolio-teaser.scss';
import ArrowRightIcon from '../../assets/right-arrow.svg';

const PortfolioTeaser = ({ frontmatter, fields }) => {
	const { title, teaser_image, lead, date } = frontmatter;
	const { src: imageSrc } = teaser_image.childImageSharp.fluid;
	return (
		<div className="portfolio-teaser">
			<Link to={fields.slug} className="portfolio-teaser__link">
				<div className="portfolio-teaser__container">
					<img className="portfolio-teaser__image" src={imageSrc} alt="" role="presentation" />
					<div className="portfolio-teaser__overlay">
						<ArrowRightIcon className="portfolio-teaser__icon" />
					</div>
				</div>
				<div className="portfolio-teaser__content">
					<h2 className="portfolio-teaser__heading">
						<span>{title}</span>
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
			</Link>
		</div>
	);
};

export default PortfolioTeaser;
