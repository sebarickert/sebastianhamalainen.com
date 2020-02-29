import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';
import LinkContainer from '../components/linkContainer/linkContainer';
import LinkContainerLink from '../components/linkContainer/linkContainer.link';
import '../scss/templates/portfolio.scss';

export const query = graphql`
query($id: String!) {
  mdx(id: { eq: $id }) {
    frontmatter {
      url_web
      url_source
      title
      lead
      teaser_image {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 453, quality: 100) {
            src
          }
        }
      }
      showcase_image {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            src
          }
        }
      }
    }
    body
    excerpt
  }
}
`;

const Portfolio = ({ data: { mdx } }) => {
  const {
    url_web: urlWeb, url_source: urlSource, title, lead, teaser_image: teaserImage, showcase_image: showcaseImage,
  } = mdx.frontmatter;
  const teaserImageSrc = teaserImage ? teaserImage.childImageSharp.fluid.src : '';
  const showcaseImageSrc = showcaseImage ? showcaseImage.childImageSharp.fluid.src : '';
  return (
    <Layout>
      <SEO title={`${title} | Portfolio`} description={mdx.excerpt} image={teaserImageSrc} />
      <article>
        <Hero title={title}>{lead}</Hero>
        <Container>
          <LinkContainer>
            <LinkContainerLink linkTarget="/portfolio" linkContainerLinkClass="mb--2">
              Go back to Portfolio
            </LinkContainerLink>
          </LinkContainer>
          <div className="portfolio__content">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
          {urlWeb || urlSource ? (
            <LinkContainer>
              {urlWeb ? <LinkContainerLink linkTarget={urlWeb}>Visit site</LinkContainerLink> : ''}
              {urlSource ? <LinkContainerLink linkTarget={urlSource}>Visit source code</LinkContainerLink> : ''}
            </LinkContainer>
          ) : (
            ''
          )}
        </Container>
        {showcaseImage ? (
          <div className="portfolio__showcase" role="presentation">
            <Container>
              <img src={showcaseImageSrc} alt="" className="portfolio__showcase-image" />
            </Container>
          </div>
        ) : (
          ''
        )}
      </article>
    </Layout>
  );
};

export default Portfolio;
