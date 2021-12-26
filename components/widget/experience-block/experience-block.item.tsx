import { getShortMonthFromDate } from '../../../utils/getShortMonthFromDate';

export interface ExperienceBlockItemProps {
  title: string;
  organization: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export default function ExperienceBlockItem({
  title,
  organization,
  description,
  start_date,
  end_date,
}: ExperienceBlockItemProps) {
  let isActive = false;
  const currentDate = new Date();

  if (!end_date || currentDate < new Date(end_date)) {
    isActive = !isActive;
  }

  const startDate = `${getShortMonthFromDate(start_date)} ${new Date(start_date).getFullYear()}`;
  const endDate = `${getShortMonthFromDate(end_date)} ${new Date(end_date).getFullYear()}`;

  if (description) {
    const descriptionSplit = description.split('\n').filter((item) => item);
    const formattedDescription = descriptionSplit.map((item) => `<p class="last:!mb-0">${item}</p>`).join('');

    description = formattedDescription;
  }

  return (
    <li className="!p-0 !m-0 before:hidden">
      <article className="bg-gray-50 p-6 md:rounded-lg border">
        <header className="grid grid-cols-[1fr,auto] items-center gap-1">
          <h3 className="!m-0 !font-bold truncate !text-2xl">
            <span className="sr-only">Organization name</span>
            {organization}
          </h3>
          <p
            className={`!m-0 text-right inline-flex justify-self-end px-2.5 py-0.5 rounded-md !text-sm font-medium uppercase whitespace-nowrap ${
              isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            <span className="sr-only">Time period</span>
            {`${startDate} to ${isActive ? 'current' : endDate}`}
          </p>
          <p className="!m-0 col-span-2 text-gray-500 !text-lg">
            <span className="sr-only">Job title</span>
            {title}
          </p>
        </header>
        {description && (
          <div className="mt-4 !text-xl !leading-9" dangerouslySetInnerHTML={{ __html: description }}></div>
        )}
      </article>
    </li>
  );
}
