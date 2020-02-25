import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import BlogTeaser from '../components/blogTeaser/blogTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import SEO from '../components/seo';

const BlogListingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              type
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

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Blog">
        Here I'll dabble into different kind of topics, but most likely relating to tech and web development.
      </Hero>
      <Container>
        <h2 className="main-subheading">All blog posts</h2>
        <Listing arrayOfContent={data.allMarkdownRemark.edges} listingComponent={BlogTeaser} />
      </Container>
    </Layout>
  );
};

export default BlogListingPage;
