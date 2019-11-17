import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import LinkContainer from '../components/linkContainer/linkContainer';
import LinkContainerLink from '../components/linkContainer/linkContainer.link';
import './blog.scss';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 600, quality: 100) {
              src
            }
          }
        }
      }
      html
      timeToRead
      excerpt
    }
  }
`;

const Blog = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, excerpt, timeToRead, html } = markdownRemark;
  const { title, date, image } = frontmatter;
  const imageSource = image ? image.childImageSharp.fluid.src : '';
  return (
    <Layout>
      <SEO title={`${title} | Blog`} description={excerpt} image={imageSource} />
      <Container>
        <div className="blog__image">
          <img src={imageSource} alt="" role="presentation" />
        </div>
      </Container>
      <Container containerClass="container--small">
        <LinkContainer>
          <LinkContainerLink linkTarget="/blog" linkContainerLinkClass="">
            Go back to Blog
          </LinkContainerLink>
        </LinkContainer>
        <h1 className="blog__heading">{title}</h1>
        <span className="blog__published">
          {date} – {timeToRead} min read
        </span>
        <div className="blog__content" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default Blog;
