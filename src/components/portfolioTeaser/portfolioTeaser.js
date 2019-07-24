import React from 'react';
import { Link } from 'gatsby';

import './portfolio-teaser.scss';

const PortfolioTeaser = ({ data }) => {
	const { node } = data;
	const { frontmatter, fields } = node;
	const { title, teaser_image } = frontmatter;
	const { childImageSharp } = teaser_image;
	const { fluid } = childImageSharp;
	return (
		<div className="portfolio-teaser">
			<Link to={`/portfolio/${fields.slug}`} className="portfolio-teaser__link">
				<div className="portfolio-teaser__content">
					<h2 className="portfolio-teaser__heading">
						<span>{title}</span>
					</h2>
				</div>
				<img className="portfolio-teaser__image" src={fluid.src} alt="" />
			</Link>
		</div>
	);
};

export default PortfolioTeaser;
