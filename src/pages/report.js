import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import Layout from "../components/layout"
import SEO from "../components/seo";

import AnnualReport from "../components/AnnualReport";
import PastReports from "../components/PastReports";

const SecondPage = () => {
  const ReportTop = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "topimage/report.jpeg" }) {
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
      <SEO title="Report" />
      <div style={{ paddingTop: `60px` }}>
        <Img fluid={ReportTop.placeholderImage.childImageSharp.fluid} />
      </div>
      <AnnualReport />
      <PastReports />
    </>
    // </Layout>
  );
};

export default SecondPage;
