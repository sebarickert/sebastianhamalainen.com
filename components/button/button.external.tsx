interface ButtonExternalProps {
  children: string | React.ReactNode;
  className: string;
  link: string;
}

export const ButtonExternal = ({ children, className, link }: ButtonExternalProps): JSX.Element => {
  return (
    <a href={link} className={className} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only">(link opens in a new tab)</span>
    </a>
  );
};
