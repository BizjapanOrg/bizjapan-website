import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import ProjectCard from "./styled/ProjectCard";
import Pulse from "../images/pulse.svg";

const WhatIsProject = () => {
  const intl = useIntl();

  // Loaded project data depending on the locale.
  if (intl.locale === "en") {
    var projectsData = require("../intl/projectsData");
  } else {
    projectsData = require("../intl/projectsDataJp");
  }

  return (
    <StaticQuery
      query={query}
      // Render all the images.
      render={data => {
        return (
          <Container title="Current Projects">
            <Pulse
              style={{
                height: `3em`,
                display: `block`,
                margin: `0 auto 2em`
              }}
            />
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                justifyContent: `space-evenly`
              }}
            >
              {data.images.edges.map(image => {
                const project = projectsData.find(v => {
                  return v.id === image.node.name;
                });

                return (
                  <ProjectCard
                    img={image.node.childImageSharp.fixed}
                    key={image.node.name}
                    name={project.name}
                    desc={project.desc}
                  />
                );
              })}
            </div>
          </Container>
        );
      }}
    />
  );
};

// Import all the images in partners folder.
const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "projects/2022" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(width: 230, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default WhatIsProject;
