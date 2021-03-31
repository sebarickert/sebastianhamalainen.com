import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import HeroLead from "../components/hero/hero.lead";
import Hero from "../components/hero/hero";
import SEO from "../components/seo/seo";
import Container from "../components/container/container";
import PortfolioTeaser from "../components/portfolioTeaser/portfolioTeaser";
import Spacer from "../components/spacer/spacer";
import Pager from "../components/pager/pager";

interface PortfolioListingPageProps {
  data: {
    allMdx: {
      edges: [{
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            teaser_image: {
              childImageSharp: {
                gatsbyImageData: {
                  images: {
                    fallback: {
                      src: string;
                    };
                  };
                };
              };
            };
            lead: string;
            stack: string[];
          };
        }
      }];
    };
  };
  pageContext: {
    contentType: string;
    currentPage: number;
    limit: number;
    numPages: number;
    skip: number;
  };
}

export const PortfolioListingPageQuery = graphql`
  query PortfolioListingPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//content/portfolio//" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            lead
            date(formatString: "MMMM DD, YYYY")
            stack
            teaser_image {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
            }
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

const PortfolioListingPage = ({
  data: { allMdx },
  pageContext,
}: PortfolioListingPageProps): JSX.Element => {
  const { edges: posts } = allMdx;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Below I've compiled a list of stuff that I have created over the years, professional and free-time projects."
      />
      <Hero title="Portfolio">
        <HeroLead>
          Here you’ll find a curated selection of my work over the years,
          including professional work and side projects.
        </HeroLead>
      </Hero>
      <Container>
        <Spacer>
          <ul className="space-y-16 md:space-y-24">
            {posts.map(({ node: { id, fields, frontmatter } }) => (
              <li key={id}>
                <PortfolioTeaser {...fields} {...frontmatter} />
              </li>
            ))}
          </ul>
          <Pager {...pageContext} />
        </Spacer>
      </Container>
    </Layout>
  );
};

export default PortfolioListingPage;
