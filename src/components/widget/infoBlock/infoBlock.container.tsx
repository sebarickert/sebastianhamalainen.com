import React from "react";

interface InfoBlockContainerProps {
  children: React.ReactNode[];
}

const InfoBlockContainer = ({
  children,
}: InfoBlockContainerProps): JSX.Element => (
  <div className="space-y-6">
    {children
      ? children.map((child, index) => (
          <div className="-mx-4" key={index}>
            {child}
          </div>
        ))
      : ""}
  </div>
);
export default InfoBlockContainer;
