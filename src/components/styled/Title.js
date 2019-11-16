import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${props => props.inputColor || "black"};
  text-align: center;
  margin-bottom: 1.5em;
`;

export default ({ inputColor, children }) => (
  <Title inputColor={inputColor} className={`title`}>
    {children}
  </Title>
);
