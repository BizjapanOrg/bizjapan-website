import React from "react";
import { StaticQuery, graphql } from "gatsby";

// Import styled components
import Container from "./styled/Container";
import ProjectCard from "./styled/ProjectCardWithatsbyImage";
import Pulse from "../images/pulse.svg";

var projectsData = require("./projectsData");

const WhatIsProject = () => (
  <StaticQuery
    query={query}
    // Render all the images.
    render={data => {
      return (
        <Container title="Projects in 2019">
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
                  name={image.node.name}
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

// Import all the images in partners folder.
const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "projects/2018" } }) {
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
