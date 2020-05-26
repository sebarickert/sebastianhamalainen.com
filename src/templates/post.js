import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Spacer from '../components/spacer/spacer';
import Button from '../components/button/button';

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
      <Spacer>
        <article className={`post post--${type}`}>
          <Container className="post__header" variation="small">
            <h1 className="post__heading">{title}</h1>
            <p className="post__date">
              {type === 'misc' || type === 'snippets' ? `Last updated on ${date}` : `Published on ${date}`}
            </p>
          </Container>
          <Container variation="small">
            <div className="post__content">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
            {type === 'blog' && (
              <Button secondary linkTo="/blog" className="mt--2">
                {'<-- Go back to Blog'}
              </Button>
            )}
            {type === 'snippets' && (
              <Button secondary linkTo="/snippets" className="mt--2">
                {'<-- Go back to Snippets'}
              </Button>
            )}
          </Container>
        </article>
      </Spacer>
    </Layout>
  );
};

export default Post;
