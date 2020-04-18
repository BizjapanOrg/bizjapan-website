import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import ProjectCard from "./styled/ProjectCard";

// Import Images
import Pulse from "../images/pulse.svg";

const Platform = () => {
  const data = useStaticQuery(graphql`
    query {
      locco: file(relativePath: { eq: "projects/2019/locco.jpg" }) {
        childImageSharp {
          fixed(width: 230, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wardrobee: file(relativePath: { eq: "projects/2019/wardrobee.jpg" }) {
        childImageSharp {
          fixed(width: 230, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bizcoin: file(relativePath: { eq: "projects/2019/bizcoin.jpg" }) {
        childImageSharp {
          fixed(width: 230, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const intl = useIntl();

  return (
    <Container title="Project Platform">
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
        <ProjectCard
          img={data.locco.childImageSharp.fixed}
          name="LoCCo"
          desc={intl.formatMessage({ id: "platform.locco" })}
        />
        <ProjectCard
          img={data.wardrobee.childImageSharp.fixed}
          name="Wardrobe E"
          desc={intl.formatMessage({ id: "platform.wardrobee" })}
        />
        <ProjectCard
          img={data.bizcoin.childImageSharp.fixed}
          name="Bizcoin"
          desc={intl.formatMessage({ id: "platform.bizcoin" })}
        />
      </div>
    </Container>
  );
};

export default Platform;
