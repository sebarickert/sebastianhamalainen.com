import { getSanityContent } from '../../utils/getSanityContent';
import { Layout } from '../../components/layout/layout';
import { Hero } from '../../components/hero/hero';
import { HeroLead } from '../../components/hero/hero.lead';
import { BlogTeaser } from '../../components/blog-teaser/blog-teaser';
import { Container } from '../../components/container/container';
import { SEO } from '../../components/seo/seo';

export interface BlogPost {
  title: string;
  lead: string;
  publishedAt: Date;
  slug: { current: string };
}

interface BlogMainPageProps {
  title: string;
  lead: string;
  posts: BlogPost[];
}

export default function Index({ title, lead, posts }: BlogMainPageProps) {
  return (
    <>
      <SEO title={title} description={lead} />
      <Layout>
        <Hero title={title}>
          <HeroLead>{lead}</HeroLead>
        </Hero>
        <Container>
          <ul className="grid gap-8 lg:grid-cols-2">
            {posts.map(({ title, lead, publishedAt, slug: { current: slugRaw } }) => (
              <li key={slugRaw}>
                <BlogTeaser title={title} lead={lead} date={publishedAt} slug={`/blog/${slugRaw}`} />
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllBlogMainPageContent($slug: String!) {
        allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          lead
        }
        allPost(sort: { publishedAt: DESC }) {
          title
          publishedAt
          lead
          slug {
            current
          }
        }
      }
    `,
    variables: {
      slug: 'blog',
    },
  });

  const { title, lead } = data.allPage[0];

  return {
    props: {
      title,
      lead,
      posts: data.allPost,
    },
    revalidate: 60,
  };
}
