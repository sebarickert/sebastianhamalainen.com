import NextImage from 'next/image';
import Link from 'next/link';
import { Icon } from '../icon/icon';

interface PortfolioTeaserProps {
  title: string;
  lead: string;
  stack: string[];
  slug: string;
  image?: { url: string; width: number; height: number };
}

export const PortfolioTeaser = ({ title, image, lead, slug, stack }: PortfolioTeaserProps): JSX.Element => {
  return (
    <article className="grid grid-rows-[auto,1fr] gap-8 relative group h-full">
      {image && (
        <figure className="overflow-hidden rounded-lg border" role="presentation">
          <NextImage src={image.url} height={image.height} width={image.width} layout="responsive" />
        </figure>
      )}
      <div className="w-full flex flex-col">
        <h2 className="mb-4 font-semibold text-2xl sm:text-3xl group-hover:underline group-focus-within:underline">
          {title}
        </h2>
        <p className="text-lg sm:text-xl !leading-relaxed text-gray-500 tracking-normal mb-6">{lead}</p>
        {stack && (
          <ul className="flex flex-wrap gap-2 mt-auto" aria-label="Project's tech stack list">
            {stack.length > 3 ? (
              <>
                {stack.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="bg-gray-100 leading-tight py-3 px-4 rounded text-base text-gray-500 font-medium"
                  >
                    {item}
                  </li>
                ))}
                <li
                  key="dummy-item"
                  className="bg-gray-100 leading-tight py-3 px-4 rounded text-base text-gray-500 font-medium"
                  aria-hidden="true"
                  role="presentation"
                >
                  ...
                </li>
              </>
            ) : (
              stack.map((item) => (
                <li
                  key={item}
                  className="bg-gray-100 leading-tight py-3 px-4 rounded text-base text-gray-500 font-medium"
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        )}
        <Link href={slug}>
          <a
            className="outline-none mt-6 text-base text-gray-500 font-medium inline-flex items-center gap-2 group-hover:ml-1 duration-200"
            aria-label={`Read showcase - ${title}`}
            title={`Read showcase - ${title}`}
          >
            <span className="absolute inset-0" aria-hidden="true"></span>
            <span>Read showcase</span>
            <Icon type="arrow-right" />
          </a>
        </Link>
      </div>
    </article>
  );
};
