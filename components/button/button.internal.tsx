import { Link } from '../link/link';

interface ButtonInternalProps {
  children: string | React.ReactNode;
  className: string;
  link: string;
}

export const ButtonInternal = ({ children, className, link }: ButtonInternalProps): JSX.Element => {
  return (
    <Link href={link} className={className}>
      {children}
    </Link>
  );
};
