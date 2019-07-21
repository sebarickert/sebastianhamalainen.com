import React from 'react';
import { Link } from 'gatsby';

import './blog-teaser.scss';

const BlogTeaser = (props) => {
	return (
		<div className="blog-teaser">
			<Link to={`/blog/${props.data.node.fields.slug}`} className="blog-teaser__link">
				<h2 className="blog-teaser__heading">
					<span>{props.data.node.frontmatter.title} </span>
				</h2>
				<span className="blog-teaser__published">{props.data.node.frontmatter.date}</span>
				<p className="blog-teaser__lead">{props.data.node.excerpt}</p>
			</Link>
		</div>
	);
};

export default BlogTeaser;
