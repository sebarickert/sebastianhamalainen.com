import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import BlogTeaser from '../components/blogTeaser/blogTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import Filter from '../components/filter/filter';
import SEO from '../components/seo';

const BlogListingPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "//content/blog//"}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            teaser_image {
              childImageSharp {
                fixed(width: 600, height: 429, quality: 100) {
                  src
                }
              }
            }
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
  const postYears = [...new Set(posts.map(({ node: post }) => new Date(post.frontmatter.date).getFullYear()))];
  const [activeYear, setActiveYear] = useState(postYears);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Blog" className="hero--blog">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Here I'll dabble into different kind of topics, but most likely relating to tech and web development.
      </Hero>
      {postYears.length > 1
          && <Filter filterItems={postYears} activeFilter={activeYear} setActiveYear={setActiveYear} /> }
      <Container>
        <Listing
          arrayOfContent={posts.filter(({ node: post }) => activeYear.indexOf(new Date(post.frontmatter.date).getFullYear()) > -1)}
          listingComponent={BlogTeaser}
          col3
        />
      </Container>
    </Layout>
  );
};

export default BlogListingPage;
