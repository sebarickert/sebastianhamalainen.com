import * as React from "react";
import { Link } from "gatsby";

interface ButtonInternalProps {
  children: string;
  className: string;
  link: string;
}

const ButtonInternal = ({
  children,
  className,
  link,
}: ButtonInternalProps): JSX.Element => {
  return (
    <Link to={link} aria-label={children} className={className}>
      {children}
    </Link>
  );
};

export default ButtonInternal;
