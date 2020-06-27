import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';
import Button from '../components/button/button';
import ButtonContainer from '../components/button/button.container';
import IconLaunchExternal from '../assets/icon--launch--external.svg';
import IconArrowLeft from '../assets/icon--arrow--left.svg';
import PostNavigation from '../components/postNavigation/postNavigation';
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
    }
    body
    excerpt
  }
}
`;

const Portfolio = ({ data: { mdx }, pageContext }) => {
  const {
    url_web: urlWeb, url_source: urlSource, title, lead, teaser_image: teaserImage,
  } = mdx.frontmatter;
  const teaserImageSrc = teaserImage ? teaserImage.childImageSharp.fluid.src : '';

  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO title={`${title} | Portfolio`} description={mdx.excerpt} image={teaserImageSrc} />
      <article>
        <Hero title={title}>{lead}</Hero>
        <Container small>
          <div className="portfolio__content">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
          {urlWeb || urlSource ? (
            <ButtonContainer>
              {urlWeb ? (
                <Button primary linkTo={urlWeb} linkTargetType="external">
                  Visit site
                  <IconLaunchExternal />
                </Button>
              ) : ''}
              {urlSource ? (
                <Button primary linkTo={urlSource} linkTargetType="external">
                  Visit source code
                  <IconLaunchExternal />
                </Button>
              ) : ''}
            </ButtonContainer>
          ) : (
            ''
          )}
          <Button secondary linkTo="/portfolio">
            <IconArrowLeft />
            Go back to Portfolio
          </Button>
          {(next || previous) && <PostNavigation {...pageContext} type="portfolio" />}
        </Container>
      </article>
    </Layout>
  );
};

export default Portfolio;
