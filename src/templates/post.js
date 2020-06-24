import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Spacer from '../components/spacer/spacer';
import Button from '../components/button/button';
import IconArrowLeft from '../assets/icon--arrow--left.svg';

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
      <SEO title={type !== 'misc' ? `${title} | ${type}` : title} description={description} />
      <article className={`post post--${type}`}>
        <div className="post__header">
          <Container medium>
            <Spacer large>
              <h1 className="post__heading">{title}</h1>
              <p className="post__date">
                {type === 'misc' || type === 'snippets' ? `Last updated on ${date}` : `Published on ${date}`}
              </p>
            </Spacer>
          </Container>
        </div>
        <Container small>
          <Spacer>
            <div className="post__content">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
            {type === 'blog' && (
              <Button secondary linkTo="/blog">
                <IconArrowLeft />
                Go back to Blog
              </Button>
            )}
            {type === 'snippets' && (
              <Button secondary linkTo="/snippets">
                <IconArrowLeft />
                Go back to Snippets
              </Button>
            )}
          </Spacer>
        </Container>
      </article>
    </Layout>
  );
};

export default Post;
