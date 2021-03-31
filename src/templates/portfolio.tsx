import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import Layout from "../components/layout/layout";
import Container from "../components/container/container";
import Hero from "../components/hero/hero";
import SEO from "../components/seo/seo";
import HeroLead from "../components/hero/hero.lead";
import Spacer from "../components/spacer/spacer";
import PostNavigation from "../components/postNavigation/postNavigation";
import Icon from "../components/icon/icon";

interface PortfolioProps {
  data: {
    mdx: {
      excerpt: string;
      body: string;
      frontmatter: {
        url_web: string;
        url_source: string;
        title: string;
        lead: string;
        teaser_image: {
          childImageSharp: {
            gatsbyImageData: {
              src: string;
            };
          };
        };
      };
    };
  };
  pageContext: {
    next: {
      fields: {
        slug: string;
      };
    };
    previous: {
      fields: {
        slug: string;
      };
    };
  };
}

export const query = graphql`
  query PortfolioQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        url_web
        url_source
        title
        lead
        teaser_image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 453
              quality: 100
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
      body
      excerpt
    }
  }
`;

const Portfolio = ({
  data: { mdx },
  pageContext,
}: PortfolioProps): JSX.Element => {
  const {
    url_web: urlWeb,
    url_source: urlSource,
    title,
    lead,
    teaser_image: teaserImage,
  } = mdx.frontmatter;
  const teaserImageSrc = teaserImage
    ? teaserImage.childImageSharp.gatsbyImageData.src
    : "";

  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO
        title={`${title} | Portfolio`}
        description={mdx.excerpt}
        image={teaserImageSrc}
      />
      <article>
        <Hero title={title}>
          <HeroLead>{lead}</HeroLead>
        </Hero>
        <Container>
          <Spacer variation="prose">
            <div className="prose prose-lg prose-blue mx-auto">
              <MDXRenderer>{mdx.body}</MDXRenderer>
              <div className="flex flex-col items-baseline">
                {urlWeb && (
                  <a
                    href={urlWeb}
                    className="inline-flex items-center focus:outline-none focus:ring ring-offset-2 rounded"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site
                    <Icon type="external-link" />
                    <span className="sr-only">(link opens in a new tab)</span>
                  </a>
                )}
                {urlSource && (
                  <a
                    href={urlSource}
                    className="inline-flex items-center focus:outline-none focus:ring ring-offset-2 rounded"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit source code
                    <Icon type="external-link" />
                    <span className="sr-only">(link opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
            {(next || previous) && <PostNavigation {...pageContext} />}
          </Spacer>
        </Container>
      </article>
    </Layout>
  );
};

export default Portfolio;
