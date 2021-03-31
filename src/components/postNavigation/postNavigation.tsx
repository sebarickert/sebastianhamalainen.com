import React from "react";
import PostNavigationItem from "./postNavigation.item";

interface PostNavigationProps {
  next: {
    fields: {
      slug: string;
    };
  };
  previous: {
    fields: {
      slug: string;
    };
  };
}

const PostNavigation = ({
  next,
  previous,
}: PostNavigationProps): JSX.Element => {
  return (
    <>
      <hr className="border-gray-200 mt-10 mb-4" />
      <div className="flex leading-6 font-medium">
        {previous && (
          <PostNavigationItem
            slug={previous.fields.slug}
            variation="previous"
          />
        )}
        {next && (
          <PostNavigationItem slug={next.fields.slug} variation="next" />
        )}
      </div>
    </>
  );
};

export default PostNavigation;
