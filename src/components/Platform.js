import React from "react";

// Import styled components
import Container from "./styled/Container";

// Import components
import ProjectCard from "./styled/ProjectCard";

// Import Images
import jumpjapan from "../images/projects/jumpjapan.png";
import mxspace from "../images/projects/mxspace.png";
import nichy from "../images/projects/nichy.png";
import Pulse from "../images/pulse.svg";

const Platform = () => (
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
        img={jumpjapan}
        name="Jump Japam"
        desc="Providing the real information about studying and working in Japan with students abroad."
      />
      <ProjectCard
        img={mxspace}
        name="M x Space"
        desc="Holding space medicine study tours during long holidays in spring and summer In order to realize 'The world guaranteed quality of space life (QOSL)'."
      />
      <ProjectCard
        img={nichy}
        name="Nichy"
        desc="Promoting exchange in terms of human resources between Japan and China by connecting Japanese university students and Chinese companies."
      />
    </div>
  </Container>
);

export default Platform;
