import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

interface ImageFileProps {
  allImageSharp: {
    edges: [
      {
        node: {
          gatsbyImageData: IGatsbyImageData;
        };
      }
    ]
  }
}

const Image = ({
  src,
  alt = "",
  className = "",
}: ImageProps): JSX.Element | null => {
  const { allImageSharp } = useStaticQuery<GatsbyTypes.ImageQueryQuery>(graphql`
    query ImageQuery {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  
  const image = allImageSharp.edges.find((edge) => {
    const source = edge.node.gatsbyImageData.images.fallback?.src;
    return source ? source.split("/").pop() === src : null;
  });

  if (!image) return null;

  const { gatsbyImageData } = image.node;

  if (!gatsbyImageData) {
    return null;
  }

  return (
    <GatsbyImage
      image={gatsbyImageData}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
