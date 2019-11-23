import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo_black.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Logo Black"
      imgStyle={{
        objectFit: "contain",
        objectPosition: "50% 50%"
      }}
      style={{ height: `25px` }}
    />
  );
};

export default HeaderLogo;
