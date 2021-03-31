import * as React from "react";

interface ButtonExternalProps {
  children: string;
  className: string;
  link: string;
}

const ButtonExternal = ({
  children,
  className,
  link,
}: ButtonExternalProps): JSX.Element => {
  return (
    <a
      href={link}
      aria-label={children}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span className="sr-only">(link opens in a new tab)</span>
    </a>
  );
};

export default ButtonExternal;
