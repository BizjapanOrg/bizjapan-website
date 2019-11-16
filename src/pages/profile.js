import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import Layout from "../components/layout"
import SEO from "../components/seo";
import FromPresident from "../components/FromPresident";

const SecondPage = () => {
  const ProfileTop = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "topimage/profile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    // <Layout>
    <>
      <SEO title="Profile" />
      <div style={{ paddingTop: `60px` }}>
        <Img fluid={ProfileTop.placeholderImage.childImageSharp.fluid} />
      </div>
      <FromPresident />
    </>
    // </Layout>
  );
};

export default SecondPage;
