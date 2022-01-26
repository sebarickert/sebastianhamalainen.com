import { isExternalLink } from '../../utils/isExternalLink';
import { Link } from '../link/link';

interface MenuLinkProps {
  children: string;
  link: string;
}

export const MenuLink = ({ children, link }: MenuLinkProps): JSX.Element => {
  const elementClasses = [
    'relative -mx-2 block rounded px-2 py-4 text-2xl font-bold text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring dark:text-gray-400 dark:hover:text-white lg:mx-0 lg:-my-3 lg:py-3 lg:px-4 lg:text-xl lg:font-semibold lg:after:absolute lg:after:bottom-2 lg:after:left-1/2 lg:after:inline-block lg:after:h-[3px] lg:after:w-[calc(100%-2rem)] lg:after:origin-left lg:after:-translate-x-1/2 lg:after:scale-x-0 lg:after:bg-black lg:after:transition lg:after:duration-200 lg:hover:after:scale-x-100 lg:dark:after:bg-white dark:ring-white',
  ];

  if (isExternalLink(link)) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={elementClasses.join(' ')}>
        {children}
        <span className="sr-only">(link opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link
      href={link}
      className={elementClasses.join(' ')}
      activeClassName="!text-black dark:!text-white lg:after:!scale-x-100"
    >
      {children}
    </Link>
  );
};
