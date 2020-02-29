import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

export const postQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        title
        slug
        date
        description
      }
      body
    }
  }
`;

const Post = ({ data: { mdx } }) => {
  // const { title, slug, date, description } = mdx.frontmatter;

  return <MDXRenderer>{mdx.body}</MDXRenderer>;
};

export default Post;
