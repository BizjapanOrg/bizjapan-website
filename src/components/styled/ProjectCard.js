import React from "react";
import styled from "styled-components";

const ProjectCard = props => (
  <ProjectCardStyle>
    <img
      src={props.img}
      alt={props.name}
      style={{ borderRadius: `20px 20px 0 0`, width: `100%` }}
    />
    <div style={{ margin: `1em` }}>
      <CardName> {props.name} </CardName>
      <CardDesc> {props.desc} </CardDesc>
    </div>
  </ProjectCardStyle>
);

// Define style of ProjectCard
const ProjectCardStyle = styled.div`
  width: 25%;
  min-width: 200px;
  margin-bottom: 1.45em;
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
  font-size: 0.8em;
`;

export default ProjectCard;
