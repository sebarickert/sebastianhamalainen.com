import Link from 'next/link';
import { formatDate } from '../../utils/formatDate';
import { Icon } from '../icon/icon';

interface BlogTeaserProps {
  lead: string;
  slug: string;
  title: string;
  date: Date;
}

export const BlogTeaser = ({ title, lead: leadRaw, slug, date }: BlogTeaserProps): JSX.Element => {
  const dateISOFormat = new Date(date).toLocaleDateString('en-CA');

  const lead = leadRaw.length > 140 ? leadRaw.slice(0, 140) + '...' : leadRaw;

  return (
    <article className="group relative flex h-full flex-col rounded-lg border bg-gray-50 p-6 duration-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-100 dark:border-neutral-850 dark:bg-neutral-800 dark:focus-within:ring-white dark:hover:bg-neutral-850">
      <time
        dateTime={dateISOFormat}
        className="mb-4 inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300"
      >
        <span className="sr-only">Published on</span>
        <Icon type="pencil" />
        <span>{formatDate(new Date(date))}</span>
      </time>
      <h2 className="text-2xl font-semibold dark:text-white">{title}</h2>
      <p className="mt-3 mb-auto text-base text-gray-700 dark:text-gray-300">{lead}</p>
      <Link href={slug}>
        <a
          className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gray-500 outline-none duration-200 group-hover:ml-1 dark:text-gray-300"
          aria-label={`Read post - ${title}`}
          title={`Read post - ${title}`}
        >
          <span className="absolute inset-0" aria-hidden="true"></span>
          <span>Read post</span>
          <Icon type="arrow-right" />
        </a>
      </Link>
    </article>
  );
};
