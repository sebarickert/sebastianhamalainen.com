interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className = '' }: ContainerProps): JSX.Element => (
  <div className={`mx-auto max-w-screen-xl px-8 md:px-10 ${className}`}>{children}</div>
);
