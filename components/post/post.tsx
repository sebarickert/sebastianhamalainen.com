import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { widgetComponents } from '../../constants/widgetComponents';
import { formatDate } from '../../utils/formatDate';
import { Container } from '../container/container';
import { Icon } from '../icon/icon';
import NextImage from 'next/image';
import { Layout } from '../layout/layout';

interface PostProps {
  title: string;
  lead: string;
  content: MDXRemoteSerializeResult;
  date: Date;
  backLinkUrl?: string;
  image?: { url: string; width: number; height: number };
  dateUpdated?: boolean;
}

export const Post = ({ title, lead, content, date: dateRaw, backLinkUrl, image, dateUpdated }: PostProps) => {
  const date = formatDate(new Date(dateRaw));

  return (
    <Layout>
      <article className="py-16 -mt-8 lg:mt-0">
        {backLinkUrl && (
          <Container className="mb-16">
            <div className="max-w-screen-md w-full mx-auto">
              <Link href={backLinkUrl}>
                <a className="font-semibold inline-flex items-center gap-4 hover:-ml-1 duration-200">
                  <Icon type="arrow-left" />
                  <span>Back to overview</span>
                </a>
              </Link>
            </div>
          </Container>
        )}
        <Container>
          <section className="prose prose-xl prose-blue mx-auto max-w-screen-md w-full">
            <header className="mb-16 grid gap-8">
              <h1 className="!mb-0 !leading-tight !font-bold tracking-tighter">{title}</h1>
              <p className="!m-0 !text-2xl !leading-relaxed text-gray-500 tracking-normal">{lead}</p>
              {date && (
                <time
                  dateTime={new Date(date).toLocaleDateString('en-CA')}
                  className="!m-0 text-base text-gray-500 font-medium inline-flex items-center gap-2"
                >
                  <span className="sr-only">{dateUpdated ? 'Last updated on' : 'Published on'}</span>
                  <Icon type="pencil" />
                  <span>{`${date}`}</span>
                </time>
              )}
            </header>
            {image && (
              <figure className="!mt-0 !mb-16 -mx-6 md:-mx-10 lg:-mx-24 overflow-hidden prose:rounded-md border-2">
                <NextImage src={image.url} height={image.height} width={image.width} layout="responsive" />
              </figure>
            )}
            <MDXRemote {...content} components={widgetComponents} lazy />
          </section>
        </Container>
      </article>
    </Layout>
  );
};
