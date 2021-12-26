import { getShortMonthFromDate } from '../../../utils/getShortMonthFromDate';

export interface CertificationBlockItemProps {
  certification: string;
  organization: string;
  date: Date;
}

export default function CertificationBlockItem({ organization, certification, date }: CertificationBlockItemProps) {
  const dateFormatted = `${getShortMonthFromDate(date)} ${new Date(date).getFullYear()}`;

  return (
    <li className="!p-0 !m-0 before:hidden">
      <article className="bg-gray-50 p-6 md:rounded-lg border">
        <header className="grid grid-cols-[1fr,auto] items-center gap-1">
          <h3 className="!m-0 !font-bold truncate !text-2xl">
            <span className="sr-only">Organization name</span>
            {organization}
          </h3>
          <p
            className={`!m-0 text-right inline-flex justify-self-end px-2.5 py-0.5 rounded-md !text-sm font-medium uppercase whitespace-nowrap bg-gray-200 text-gray-800`}
          >
            <span className="sr-only">Date obtained</span>
            {dateFormatted}
          </p>
          <p className="!m-0 col-span-2 text-gray-500 !text-lg">
            <span className="sr-only">Certification name</span>
            {certification}
          </p>
        </header>
      </article>
    </li>
  );
}
