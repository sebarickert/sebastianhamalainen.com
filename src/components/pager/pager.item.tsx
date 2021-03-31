import { Link } from "gatsby";
import React from "react";

interface PagerItemProps {
  title: string;
  link: string;
  children: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  isHiddenMobile?: boolean;
}

const PagerItem = ({
  title,
  link,
  children,
  disabled = false,
  isActive = false,
  isHiddenMobile = false,
}: PagerItemProps): JSX.Element => {
  const parentElementClasses = [];

  const elementClasses = [
    "text-base bg-gray-100 font-semibold w-12 h-12 inline-flex rounded-full justify-center items-center",
  ];

  if (isHiddenMobile && !isActive) {
    parentElementClasses.push("hidden md:inline-flex");
  }

  if (!disabled && !isActive) {
    elementClasses.push(
      "hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-offset-2"
    );
  }

  if (disabled && !isActive) {
    elementClasses.push("cursor-not-allowed opacity-50");
  }

  if (isActive) {
    elementClasses.push("!bg-blue-600 text-white");
  }

  if (disabled) {
    return (
      <li className={parentElementClasses.join(" ")}>
        <span className={elementClasses.join(" ")}>{children}</span>
      </li>
    );
  }

  return (
    <li className={parentElementClasses.join(" ")}>
      <Link
        to={link}
        title={title}
        aria-label={title}
        className={elementClasses.join(" ")}
      >
        {children}
      </Link>
    </li>
  );
};

export default PagerItem;
