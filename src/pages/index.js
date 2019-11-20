import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

// import components
import SEO from "../components/seo";
import AboutUs from "../components/AboutUs";
import Values from "../components/Values";
import Platform from "../components/Platform";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

const IndexPage = ({ intl }) => {
  const HomeTop = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "topimage/home.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <div style={{ paddingTop: `60px` }}>
        <Img fluid={HomeTop.placeholderImage.childImageSharp.fluid} />
      </div>
      <AboutUs title={intl.formatMessage({ id: "example" })} />
      <Values />
      <Platform />
      <Partners />
      <Contact />
    </>
  );
};

export default injectIntl(IndexPage);
