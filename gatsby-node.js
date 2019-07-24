const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');

		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogTemplate = path.resolve('./src/templates/blog.js');
	const portfolioTemplate = path.resolve('./src/templates/portfolio.js');

	const res = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							type
						}
						fields {
							slug
						}
					}
				}
			}
		}	
  `);

	res.data.allMarkdownRemark.edges.forEach((e) => {
		if (e.node.frontmatter.type === 'blog') {
			createPage({
				component: blogTemplate,
				path: `/blog/${e.node.fields.slug}`,
				context: {
					slug: e.node.fields.slug
				}
			});
		} else if (e.node.frontmatter.type === 'portfolio') {
			createPage({
				component: portfolioTemplate,
				path: `/portfolio/${e.node.fields.slug}`,
				context: {
					slug: e.node.fields.slug
				}
			});
		}
	});
};
