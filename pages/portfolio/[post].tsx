import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getSanityContent } from '../../utils/getSanityContent';
import { Post } from '../../components/post/post';
import { SEO } from '../../components/seo/seo';

interface PortfolioPostProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  image: { url: string; width: number; height: number };
  publishedAt: Date;
}

export const getStaticPaths = async () => {
  const data = await getSanityContent({
    query: `
      query AllPortfolioPosts {
        allPortfolio {
          slug {
            current
          }
        }
      }
    `,
  });

  const paths = data.allPortfolio.map(({ slug: { current } }) => {
    return {
      params: { post: current },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getSanityContent({
    query: `
      query PortfolioPostBySlug($slug: String!) {
        allPortfolio(where: { slug: { current: { eq: $slug } } }) {
          title
          lead
          content
          publishedAt
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
        }
      }
    `,
    variables: {
      slug: params.post,
    },
  });

  const {
    title,
    lead,
    publishedAt,
    content: contentRaw,
    showcase_image: {
      asset: {
        url,
        metadata: {
          dimensions: { width: imageWidth, height: imageHeight },
        },
      },
    },
  } = data.allPortfolio[0];

  const serializedContent = await serialize(contentRaw);

  return {
    props: {
      title,
      lead,
      publishedAt,
      content: serializedContent,
      image: { url, width: imageWidth, height: imageHeight },
    },
    revalidate: 60,
  };
};

export default function PortfolioPost({ title, lead, content, image, publishedAt }: PortfolioPostProps) {
  return (
    <>
      <SEO title={title} description={lead} image={image.url} />
      <Post title={title} lead={lead} content={content} date={publishedAt} image={image} backLinkUrl="/portfolio" />;
    </>
  );
}
