import { BlogLiftup } from '../components/blog-liftup/blog-liftup';
import { Button } from '../components/button/button';
import { Hero } from '../components/hero/hero';
import { HeroLead } from '../components/hero/hero.lead';
import { Icon } from '../components/icon/icon';
import { Layout } from '../components/layout/layout';
import { PortfolioLiftup } from '../components/portfolio-liftup/portfolio-liftup';
import { SEO } from '../components/seo/seo';
import { getSanityContent } from '../utils/getSanityContent';
import { BlogPost } from './blog';
import { PortfolioPostTeaser } from './portfolio';

interface FrontpageProps {
  frontpage_hero: { title: string; lead: string };
  portfolioPosts: PortfolioPostTeaser[];
  blogPosts: BlogPost[];
}

export default function Index({ frontpage_hero, blogPosts, portfolioPosts }: FrontpageProps) {
  const { title: heroTitle, lead: heroLead } = frontpage_hero;

  return (
    <>
      <SEO
        title="Welcome"
        description="Developer located in Helsinki, Finland. Web Design and JS enthusiast, also
      a so-called gym rat.I like to play around with CSS."
      />
      <Layout>
        <Hero title={heroTitle}>
          <HeroLead>{heroLead}</HeroLead>
          <Button link="/portfolio" className="mt-12">
            Checkout my work
            <Icon type="arrow-right" className="ml-2" />
          </Button>
        </Hero>
        <PortfolioLiftup posts={portfolioPosts} />
        <BlogLiftup posts={blogPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllFrontpageContent {
        allPerson(limit: 1, sort: { _createdAt: DESC }) {
          name
          description
        }
        allPortfolio(limit: 2, sort: { publishedAt: DESC }) {
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
        allPost(limit: 2, sort: { publishedAt: DESC }) {
          title
          publishedAt
          lead
          slug {
            current
          }
        }
      }
    `,
  });

  const { name, description } = data.allPerson[0];

  return {
    props: {
      frontpage_hero: { title: `Hey, I'm ${name}.`, lead: description },
      blogPosts: data.allPost,
      portfolioPosts: data.allPortfolio,
    },
    revalidate: 60,
  };
}
