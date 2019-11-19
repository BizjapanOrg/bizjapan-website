import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import Layout from "../components/layout"
import SEO from "../components/seo";
import FromPresident from "../components/FromPresident";
import CorporateInformation from "../components/CorporateInformation";
import Stats from "../components/Stats";

const SecondPage = () => {
  const ProfileTop = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "topimage/profile.jpeg" }) {
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
      <CorporateInformation />
      <Stats />
    </>
    // </Layout>
  );
};

export default SecondPage;
