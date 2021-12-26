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
    <article className="bg-gray-50 hover:bg-gray-100 p-6 border relative group focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 rounded-lg duration-200 h-full flex flex-col">
      <time
        dateTime={dateISOFormat}
        className="mb-4 text-base text-gray-500 font-medium inline-flex items-center gap-2"
      >
        <span className="sr-only">Published on</span>
        <Icon type="pencil" />
        <span>{formatDate(new Date(date))}</span>
      </time>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="mt-3 mb-auto text-base text-gray-700">{lead}</p>
      <Link href={slug}>
        <a
          className="outline-none mt-6 text-base text-gray-500 font-medium inline-flex items-center gap-2 group-hover:ml-1 duration-200"
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
