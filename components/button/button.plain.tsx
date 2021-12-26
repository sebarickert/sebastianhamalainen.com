interface ButtonPlainProps {
  children: string | React.ReactNode;
  onClick(): void;
  className: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const ButtonPlain = ({ children, onClick, className, type = 'button' }: ButtonPlainProps): JSX.Element => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
