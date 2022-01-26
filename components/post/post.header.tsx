import { formatDate } from '../../utils/formatDate';
import { Icon } from '../icon/icon';

interface PostHeaderProps {
  title: string;
  lead: string;
  date: Date;
  dateUpdated?: boolean;
}

export const PostHeader = ({ title, lead, date: dateRaw, dateUpdated }: PostHeaderProps) => {
  const date = formatDate(new Date(dateRaw));

  return (
    <header className="mb-16 grid">
      <h1 className="!mb-4 !text-5xl !font-bold !leading-tight tracking-tighter sm:!text-[56px]">{title}</h1>
      <p className="!mt-0 !mb-8 !text-2xl !leading-relaxed tracking-normal text-gray-500 dark:text-gray-300">{lead}</p>
      {date && (
        <time
          dateTime={new Date(date).toLocaleDateString('en-CA')}
          className="!m-0 inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300"
        >
          <span className="sr-only">{dateUpdated ? 'Last updated on' : 'Published on'}</span>
          <Icon type="pencil" />
          <span>{`${date}`}</span>
        </time>
      )}
    </header>
  );
};
