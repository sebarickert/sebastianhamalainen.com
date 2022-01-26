import { getShortMonthFromDate } from '../../../utils/getShortMonthFromDate';

export interface CertificationBlockItemProps {
  certification: string;
  organization: string;
  date: Date;
}

export default function CertificationBlockItem({ organization, certification, date }: CertificationBlockItemProps) {
  const dateFormatted = `${getShortMonthFromDate(date)} ${new Date(date).getFullYear()}`;

  return (
    <li className="!m-0 !p-0 before:hidden">
      <article className="rounded-lg border bg-gray-50 p-6 dark:border-neutral-850 dark:bg-neutral-800">
        <header className="grid grid-cols-[1fr,auto] items-center gap-1">
          <h3 className="!m-0 truncate !text-2xl !font-bold">
            <span className="sr-only">Organization name</span>
            {organization}
          </h3>
          <p
            className={`order-3 col-span-full mt-1 mb-0 inline-flex justify-self-start whitespace-nowrap rounded-md bg-gray-200 px-2.5 py-0.5 text-right !text-sm font-medium uppercase text-gray-800 dark:bg-neutral-700 dark:text-gray-300 sm:order-none sm:col-auto sm:m-0 sm:justify-self-end`}
          >
            <span className="sr-only">Date obtained</span>
            {dateFormatted}
          </p>
          <p className="col-span-2 !m-0 !text-lg text-gray-500 dark:text-gray-300">
            <span className="sr-only">Certification name</span>
            {certification}
          </p>
        </header>
      </article>
    </li>
  );
}
