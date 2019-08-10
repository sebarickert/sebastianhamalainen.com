import React from 'react';
import { Link } from 'gatsby';

import './portfolio-teaser.scss';

const PortfolioTeaser = ({ data }) => {
	const { node } = data;
	const { frontmatter, fields } = node;
	const { title, teaser_image, lead } = frontmatter;
	const { childImageSharp } = teaser_image;
	const { fluid } = childImageSharp;
	return (
		<div className="portfolio-teaser">
			<Link to={`/portfolio/${fields.slug}`} className="portfolio-teaser__link">
				<img className="portfolio-teaser__image" src={fluid.src} alt="" role="presentation" />
				<div className="portfolio-teaser__content">
					<h2 className="portfolio-teaser__heading">
						<span>{title}</span>
					</h2>
					<p className="portfolio-teaser__lead">{lead}</p>
				</div>
			</Link>
		</div>
	);
};

export default PortfolioTeaser;
