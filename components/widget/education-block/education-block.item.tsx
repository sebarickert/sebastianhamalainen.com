import { getShortMonthFromDate } from '../../../utils/getShortMonthFromDate';

export interface EducationBlockItemProps {
  degree: string;
  organization: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export default function EducationBlockItem({
  degree,
  organization,
  start_date,
  end_date,
  description,
}: EducationBlockItemProps) {
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
    <li className="!m-0 !p-0 before:hidden">
      <article className="rounded-lg border bg-gray-50 p-6 dark:border-neutral-850 dark:bg-neutral-800">
        <header className="grid grid-cols-[1fr,auto] items-center gap-1">
          <h3 className="!m-0 truncate !text-2xl !font-bold">
            <span className="sr-only">Organization name</span>
            {organization}
          </h3>
          <p
            className={`order-3 col-span-full mt-1 mb-0 inline-flex justify-self-start whitespace-nowrap rounded-md px-2.5 py-0.5 text-right !text-sm font-medium uppercase sm:order-none sm:col-auto sm:m-0 sm:justify-self-end ${
              isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-gray-300'
            }`}
          >
            <span className="sr-only">Time period</span>
            {`${startDate} to ${isActive ? 'current' : endDate}`}
          </p>
          <p className="col-span-2 !m-0 !text-lg text-gray-500 dark:text-gray-300">
            <span className="sr-only">Degree name</span>
            {degree}
          </p>
        </header>
        {description && (
          <div className="mt-4 !text-xl !leading-9" dangerouslySetInnerHTML={{ __html: description }}></div>
        )}
      </article>
    </li>
  );
}
