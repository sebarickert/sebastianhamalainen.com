import React from 'react';
import { Link } from 'gatsby';

const BlogTeaser = (props) => {
	return (
		<div className="blog-teaser">
			<Link to={`/blog/${props.data.fields.slug}`} className="blog-teaser__link">
				<h2 className="blog-teaser__heading">
					<span>{props.data.frontmatter.title} </span>
				</h2>
				<span className="blog-teaser__published">{props.data.frontmatter.date}</span>
				<p className="blog-teaser__lead">{props.data.excerpt}</p>
			</Link>
		</div>
	);
};

export default BlogTeaser;
