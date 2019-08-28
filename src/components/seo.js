/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import path from 'path';

import defaultImage from '../images/website-default-image.jpg';

const SEO = ({ description, lang, meta, title, image }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						twitter
						github
						linkedin
						email
						title
						description
						website
						siteUrl
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaTitle = title ? `${title} | ${site.siteMetadata.title}` : `Welcome | ${site.siteMetadata.title}`;
	const metaImage = image || defaultImage;
	const siteUrl = site.siteMetadata.siteUrl;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={metaTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					name: 'og:image',
					content: `${siteUrl}${path.resolve(metaImage)}`
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:site`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				},
				{
					name: 'twitter:image',
					content: `${siteUrl}${path.resolve(metaImage)}`
				},
				{
					name: `og:site_name`,
					content: `sebastianhamalainen.com`
				}
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	title: ``
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object)
};

export default SEO;
