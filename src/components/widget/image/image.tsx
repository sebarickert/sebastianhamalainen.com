import React from "react";

import Image from "../../../utils/image";

interface WidgetImageProps {
  children?: string;
  src: string;
  alt?: string;
  type?: "contain" | "overflow";
}

const WidgetImage = ({
  children,
  src,
  alt = "",
  type = "overflow",
}: WidgetImageProps): JSX.Element => {
  const filename = src.replace(/^.*[\\/]/, "");
  const elementClasses = [""];

  if (type === "overflow") {
    elementClasses.push(
      "px-0 bg-gray-50 border md:px-8 -mx-6 md:-mx-10 lg:-mx-24"
    );
  }

  if (!children) {
    elementClasses.push("pb-8 md:pb-8");
  }

  return (
    <figure className={elementClasses.join(" ")}>
      <Image src={filename} alt={alt} />
      {children ? (
        <figcaption className="text-center px-4 pb-4">{children}</figcaption>
      ) : (
        ""
      )}
    </figure>
  );
};

export default WidgetImage;
