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
      jumpjapan: file(relativePath: { eq: "projects/2018/jumpjapan.jpg" }) {
        childImageSharp {
          fixed(width: 230, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mxspace: file(relativePath: { eq: "projects/2018/mxspace.jpg" }) {
        childImageSharp {
          fixed(width: 230, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nichy: file(relativePath: { eq: "projects/2018/nichy.jpg" }) {
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
          img={data.jumpjapan.childImageSharp.fixed}
          name="Jump Japam"
          desc={intl.formatMessage({ id: "platform.jumpjapan" })}
        />
        <ProjectCard
          img={data.mxspace.childImageSharp.fixed}
          name="M x Space"
          desc={intl.formatMessage({ id: "platform.mxspace" })}
        />
        <ProjectCard
          img={data.nichy.childImageSharp.fixed}
          name="Nichy"
          desc={intl.formatMessage({ id: "platform.nichy" })}
        />
      </div>
    </Container>
  );
};

export default Platform;
