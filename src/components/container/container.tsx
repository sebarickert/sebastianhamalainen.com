import * as React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({
  children,
  className = "",
}: ContainerProps): JSX.Element => (
  <div className={`mx-auto max-w-screen-xl px-6 md:px-10 ${className}`}>
    {children}
  </div>
);

export default Container;
