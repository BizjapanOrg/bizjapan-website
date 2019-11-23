import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ProjectCard = props => (
  <ProjectCardStyle>
    <div style={{ borderRadius: `20px 20px 0 0` }}>
      <Img
        fixed={props.img}
        imgStyle={{
          objectFit: "contain",
          objectPosition: "50% 50%"
        }}
        style={{
          borderRadius: "20px 20px 0 0"
        }}
      />
    </div>
    <div style={{ margin: `0.5em 1em 1em 1em` }}>
      <CardName> {props.name} </CardName>
      <CardDesc> {props.desc} </CardDesc>
    </div>
  </ProjectCardStyle>
);

// Define style of ProjectCard
const ProjectCardStyle = styled.div`
  width: 230px;
  margin: 0 0.5em 1.45em 0.5em;
  border-radius: 20px;
  box-shadow: 6px 6px 30px 0 rgba(0, 0, 0, 0.16);
`;
const CardName = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
`;
const CardDesc = styled.p`
  margin: 0;
  padding-top: 0.5em;
  font-size: 0.85em;
`;

export default ProjectCard;
