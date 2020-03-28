import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SnippetTeaser from '../components/snippetTeaser/snippetTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import Spacer from '../components/spacer/spacer';
import SEO from '../components/seo';

const SnippetsListingPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "//content/snippets//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            keywords
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <Layout className="gray-light">
      <SEO
        title="Snippets"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Snippets">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Here you’ll find a curated selection of code snippets for various web components and functions that I thought looked good or work very well.
      </Hero>
      <Container variation="small">
        <Spacer>
          <Listing arrayOfContent={posts} listingComponent={SnippetTeaser} className="listing--no-margin" />
        </Spacer>
      </Container>
    </Layout>
  );
};

export default SnippetsListingPage;
