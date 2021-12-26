import React from 'react';
import Helmet from 'react-helmet';
import path from 'path-browserify';

import defaultImage from '../../images/website-default-image.jpg';
import { metadata } from '../../constants/metadata';

interface SEOProps {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
}

export const SEO = ({ description, lang, title, image }: SEOProps): JSX.Element => {
  const { siteUrl, title: defaultTitle, description: defaultDescription, author } = metadata;

  const metaDescription = description || defaultDescription;
  const metaTitle = title ? `${title} | ${defaultTitle}` : `Welcome | ${defaultTitle}`;
  const metaImage = image || `${siteUrl}${path.resolve(defaultImage.src)}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          name: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:site',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: 'og:site_name',
          content: 'sebastianhamalainen.com',
        },
      ]}
    />
  );
};
