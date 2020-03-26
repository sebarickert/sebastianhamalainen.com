import React from 'react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Spacer from '../components/spacer/spacer';
import Button from '../components/button/button';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 not found" description="The page you're looking for was moved or doesn't exist." />
    <Container variation="small">
      <Spacer>
        <h1>404 not found</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>The page you're looking for was moved or doesn't exist.</h2>
        <Button primary linkTo="/" className="mt--4">{'<-- Go back to the frontpage'}</Button>
      </Spacer>
    </Container>
  </Layout>
);

export default NotFoundPage;
