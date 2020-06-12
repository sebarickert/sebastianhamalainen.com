import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogTeaser from '../blogTeaser/blogTeaser';
import Spacer from '../spacer/spacer';
import Container from '../container/container';
import Heading from '../heading/heading';
import Button from '../button/button';

import './blogLiftupListing.scss';

const BlogLiftupListing = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
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

  return (
    <div className="blog-liftup">
      <Spacer large>
        <Container>
          <Heading>Latest blog posts</Heading>
        </Container>
        <div className="slider">
          <Container>
            <ul className="slider__list">
              {data.allMdx.edges.map(({
                node: {
                  frontmatter, fields, id, excerpt = '',
                },
              }) => <li className="slider__item" key={id}><BlogTeaser key={id} excerpt={excerpt} {...frontmatter} {...fields} /></li>)}
            </ul>
          </Container>
        </div>
        <Container>
          <Button primary center linkTo="/blog" className="blog-liftup__button">{'See blog posts -->'}</Button>
        </Container>
      </Spacer>
    </div>
  );
};

export default BlogLiftupListing;
