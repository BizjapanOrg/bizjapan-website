import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import Layout from "../components/layout"
import SEO from "../components/seo";

// Import Components
import WhatIsProject from "../components/WhatIsProject";
import Projects from "../components/Projects";
import PastProjects from "../components/PastProjects";

const SecondPage = () => {
  const ProjectTop = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "topimage/project.png" }) {
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
      <SEO title="Projects" />
      <div style={{ paddingTop: `60px` }}>
        <Img fluid={ProjectTop.placeholderImage.childImageSharp.fluid} />
      </div>
      <WhatIsProject />
      <Projects />
      <PastProjects />
    </>
    // </Layout>
  );
};

export default SecondPage;
