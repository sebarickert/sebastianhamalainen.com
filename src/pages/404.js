import React from 'react';

import Layout from '../components/layout/layout';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 not found" description="The page you're looking for was moved or doesn't exist." />
    <Hero title="404 not found" button buttonLink="/" buttonText="Go back to the frontpage">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      The page you're looking for was moved or doesn't exist.
    </Hero>
  </Layout>
);

export default NotFoundPage;
