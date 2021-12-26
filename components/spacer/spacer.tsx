interface SpacerProps {
  children: React.ReactNode;
}

export const Spacer = ({ children }: SpacerProps): JSX.Element => {
  return <div className="py-12 sm:py-16 lg:py-24">{children}</div>;
};
