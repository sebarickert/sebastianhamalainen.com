import { Link } from "gatsby";
import React from "react";
import Button from "../button/button";

interface PortfolioTeaserProps {
  lead: string;
  slug: string;
  stack: string[];
  teaser_image: {
    childImageSharp: {
      gatsbyImageData: {
        images: {
          fallback: {
            src: string;
          };
        };
      };
    };
  };
  title: string;
}

const PortfolioTeaser = ({
  title,
  teaser_image: teaserImage,
  lead,
  slug,
  stack,
}: PortfolioTeaserProps): JSX.Element => {
  const imageSrc =
    teaserImage.childImageSharp.gatsbyImageData.images.fallback.src;

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="rounded-lg overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={imageSrc}
          alt=""
          role="presentation"
        />
      </div>
      <div className="w-full md:flex md:place-items-center">
        <div className="space-y-6 sm:space-y-8 md:py-12">
          <h2 className="text-2xl sm:text-3xl leading-tight font-bold tracking-tight text-gray-900">
            <Link
              to={slug}
              className="hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring ring-offset-4 rounded"
            >
              {title}
            </Link>
          </h2>
          <p className="text-lg lg:text-xl text-gray-500">{lead}</p>
          {stack && (
            <ul className="flex flex-wrap">
              {stack.sort().map((item) => (
                <li
                  key={item}
                  className="bg-gray-100 mr-2 mb-2 text-sm text-gray-500 leading-tight py-3 px-4 rounded lg:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Button link={slug}>{"Read more -->"}</Button>
        </div>
      </div>
    </article>
  );
};

export default PortfolioTeaser;
