import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SnippetTeaser from '../components/snippetTeaser/snippetTeaser';
import Hero from '../components/hero/hero';
import Listing from '../components/listing/listing';
import Filter from '../components/filter/filter';
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
  const categories = [...new Set(posts.map(({ node: post }) => post.frontmatter.category))];
  const [category, setCategory] = useState(categories);

  return (
    <Layout className="gray-light">
      <SEO
        title="Snippets"
        description="Here I'll dabble into different kind of topics, but most likely relating to tech and web development."
      />
      <Hero title="Snippets" className="hero--snippets">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Here you’ll find a curated selection of code snippets for various web components and functions that I thought looked good or work very well.
      </Hero>
      {categories.length > 1
          && <Filter filterItems={categories} activeFilter={category} setActiveYear={setCategory} /> }
      <Container>
        <Listing
          arrayOfContent={posts.filter(({ node: post }) => category.indexOf(post.frontmatter.category) > -1)}
          listingComponent={SnippetTeaser}
          col3
          baseSpacing
        />
      </Container>
    </Layout>
  );
};

export default SnippetsListingPage;
