import { Link } from "gatsby";
import React from "react";

interface PostNavigationItemProps {
  slug: string;
  variation: "previous" | "next";
}

const PostNavigationItem = ({
  slug,
  variation,
}: PostNavigationItemProps): JSX.Element => {
  const elementClassesMapping = {
    previous: "mr-8",
    next: "text-right ml-auto",
  };

  const navigationTextMapping = {
    previous: "Previous post",
    next: "Next post",
  };

  return (
    <Link
      to={slug}
      aria-label="Next post"
      className={`flex no-underline transition-colors duration-200 hover:text-gray-900 ${elementClassesMapping[variation]}`}
    >
      {variation === "previous" && (
        <span aria-hidden="true" className="mr-2">
          {"<-"}
        </span>
      )}
      {navigationTextMapping[variation]}
      {variation === "next" && (
        <span aria-hidden="true" className="ml-2">
          {"->"}
        </span>
      )}
    </Link>
  );
};

export default PostNavigationItem;
