import { isExternalLink } from '../../utils/isExternalLink';
import { Link } from '../link/link';

interface MenuLinkProps {
  children: string;
  link: string;
}

export const MenuLink = ({ children, link }: MenuLinkProps): JSX.Element => {
  const elementClasses = [
    'block -mx-2 px-2 py-4 text-gray-600 text-2xl font-bold lg:font-semibold hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring rounded lg:text-xl lg:mx-0 lg:-my-3 lg:py-3 lg:px-4 relative lg:after:h-[3px] lg:after:w-[calc(100%-2rem)] lg:after:bg-blue-600 lg:after:inline-block lg:after:bottom-2 lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:absolute lg:after:origin-left lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition lg:after:duration-200',
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
    <Link href={link} className={elementClasses.join(' ')} activeClassName="!text-blue-600 lg:after:!scale-x-100">
      {children}
    </Link>
  );
};
