import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getSanityContent } from '../../utils/getSanityContent';
import { Post } from '../../components/post/post';
import { SEO } from '../../components/seo/seo';
import { Link } from '../../components/link/link';

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
          url_source
          url_website
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
    stack,
    url_source,
    url_website,
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
      stack,
      url_source,
      url_website,
    },
    revalidate: 60,
  };
};

interface PortfolioPostProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  image: { url: string; width: number; height: number };
  publishedAt: Date;
  stack: [{ name: string }];
  url_source?: string;
  url_website?: string;
}

export default function PortfolioPost({
  title,
  lead,
  content,
  image,
  publishedAt,
  stack: stackRaw,
  url_source,
  url_website,
}: PortfolioPostProps) {
  const stack = stackRaw.map(({ name }) => name);
  return (
    <>
      <SEO title={title} description={lead} image={image.url} />
      <Post title={title} lead={lead} content={content} date={publishedAt} image={image} backLinkUrl="/portfolio">
        {stack && (
          <div className="bg-gray-50 p-6 border relative rounded-lg -mx-6 mt-8">
            <section>
              <h2 className="mt-0 mb-4 text-2xl !leading-tight !font-semibold tracking-tight">
                Tech stack used in this project
              </h2>
              <ul className="flex flex-wrap gap-2 mt-auto list-none pl-0" aria-label="Project's tech stack list">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="!m-0 bg-gray-200 leading-tight py-3 px-4 rounded text-base text-gray-600 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
        {(url_source || url_website) && (
          <section className="flex flex-col items-baseline mt-4 gap-2">
            {url_source && <Link href={url_source}>Visit source</Link>}
            {url_website && <Link href={url_website}>Visit website</Link>}
          </section>
        )}
      </Post>
      ;
    </>
  );
}
