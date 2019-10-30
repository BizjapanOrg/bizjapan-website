import React from "react"
import styled from "styled-components"

const ProjectCard = props => (
  <ProjectCardStyle>
    <CardName> {props.name} </CardName>
    <CardDesc> {props.desc} </CardDesc>
  </ProjectCardStyle>
)

// Define style of ProjectCard
const ProjectCardStyle = styled.div`
  background: blue;
  width: 230px;
  min-width: 230px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 6px 6px 30px 0 rgba(0, 0, 0, 0.16);
  margin: 0 0.5em 1.45em 0.5em;
`
const CardName = styled.p`
  padding: 0.5em 1em;
  margin: 0;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
`
const CardDesc = styled.p`
  padding: 0.5em 1em;
  margin: 0;
  font-size:0.8em;
`

export default ProjectCard