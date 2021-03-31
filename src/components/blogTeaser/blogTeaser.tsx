import { Link } from "gatsby";
import React from "react";

interface BlogProps {
  excerpt: string;
  slug: string;
  title: string;
  date: Date;
}

const BlogTeaser = ({ title, excerpt, slug, date }: BlogProps): JSX.Element => {
  const dateISOFormat = new Date(date).toLocaleDateString("en-CA");
  return (
    <article>
      <p className="text-sm text-gray-500">
        <time dateTime={dateISOFormat}>{date}</time>
      </p>
      <Link
        to={slug}
        className="mt-2 block rounded focus:text-blue-500 focus:outline-none focus:ring focus:ring-offset-2"
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-3 text-base text-gray-500">{excerpt}</p>
      </Link>
      <Link
        to={slug}
        className="mt-3 inline-block text-base font-semibold text-blue-600 hover:text-blue-500 focus:text-blue-500 focus:outline-none focus:ring focus:ring-offset-2 rounded"
      >{`Read post ->`}</Link>
    </article>
  );
};

export default BlogTeaser;
