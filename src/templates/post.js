import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Spacer from '../components/spacer/spacer';

import '../scss/templates/post.scss';

export const postQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        title
        type
        date(formatString: "MMMM DD, YYYY")
        description
      }
      body
    }
  }
`;

const Post = ({ data: { mdx } }) => {
  const {
    title, date, description, type,
  } = mdx.fields;

  return (
    <Layout>
      <SEO title={type !== 'misc' ? `${title} | Blog` : title} description={description} />
      <Container variation="small">
        <Spacer>
          <article>
            <h1 className="post__heading">{title}</h1>
            {title.toLowerCase() !== 'about' && (
            <p className="post__date">
              {type === 'misc' ? `Modified on ${date}` : `Published on ${date}`}
            </p>
            )}
            <div className="post__content">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
          </article>
        </Spacer>
      </Container>
    </Layout>
  );
};

export default Post;
