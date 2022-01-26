import { getSanityContent } from '../../utils/getSanityContent';
import { Layout } from '../../components/layout/layout';
import { Hero } from '../../components/hero/hero';
import { HeroLead } from '../../components/hero/hero.lead';
import { Container } from '../../components/container/container';
import { PortfolioTeaser } from '../../components/portfolio-teaser/portfolio-teaser';
import { SEO } from '../../components/seo/seo';

export interface PortfolioPostTeaser {
  title: string;
  lead: string;
  slug: { current: string };
  showcase_image: { asset: { url: string; metadata: { dimensions: { width: number; height: number } } } };
  stack: [{ name: string }];
}

interface PortfolioMainPageProps {
  title: string;
  lead: string;
  posts: PortfolioPostTeaser[];
}

export default function Index({ title, lead, posts }: PortfolioMainPageProps) {
  return (
    <>
      <SEO title={title} description={lead} />
      <Layout>
        <Hero title={title}>
          <HeroLead>{lead}</HeroLead>
        </Hero>
        <Container>
          <ul className="grid gap-y-12 md:gap-x-8 lg:grid-cols-2 lg:gap-y-12 lg:gap-x-12">
            {posts.map(
              ({
                title,
                lead,
                slug: { current: slugRaw },
                showcase_image: {
                  asset: {
                    url,
                    metadata: {
                      dimensions: { width: imageWidth, height: imageHeight },
                    },
                  },
                },
                stack: stackRaw,
              }) => {
                const stack = stackRaw.map(({ name }) => name);
                const image = { url, width: imageWidth, height: imageHeight };

                return (
                  <li key={slugRaw}>
                    <PortfolioTeaser
                      title={title}
                      lead={lead}
                      slug={`/portfolio/${slugRaw}`}
                      image={image}
                      stack={stack}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllPortfolioMainPageContent($slug: String!) {
        allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          lead
        }
        allPortfolio(sort: { publishedAt: DESC }) {
          title
          lead
          stack {
            name
          }
          showcase_image {
            asset {
              metadata {
                dimensions {
                  width
                  height
                }
              }
              url
            }
          }
          slug {
            current
          }
        }
      }
    `,
    variables: {
      slug: 'portfolio',
    },
  });

  const { title, lead } = data.allPage[0];

  return {
    props: {
      title,
      lead,
      posts: data.allPortfolio,
    },
    revalidate: 60,
  };
}
