import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 not found" description="The page you're looking for was moved or doesn't exist." />
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <Hero title="404 not found">The page you're looking for was moved or doesn't exist.</Hero>
    <Container>
      <Link to="/" className="h3">
        Go back to the frontpage
      </Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
