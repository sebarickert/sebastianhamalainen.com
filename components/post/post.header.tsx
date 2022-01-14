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
      <h1 className="!mb-4 !leading-tight !font-bold tracking-tighter !text-5xl sm:!text-[56px]">{title}</h1>
      <p className="!mt-0 !mb-8 !text-2xl !leading-relaxed text-gray-500 tracking-normal">{lead}</p>
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
  );
};
