import React from "react";

interface SpacerProps {
  children: React.ReactNode;
  variation?: "full" | "prose";
}

const Spacer = ({ children, variation = "full" }: SpacerProps): JSX.Element => {
  const elementClasses = {
    full: "py-12 sm:py-16 lg:py-32",
    prose: "pb-12 sm:pb-16 lg:pb-32",
  };

  return <div className={elementClasses[variation]}>{children}</div>;
};

export default Spacer;
