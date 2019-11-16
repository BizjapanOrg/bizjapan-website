import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Container = styled.section`
  position: static;
  box-sizing: border-box;
  min-width: 260px;
  width: 65%;
  max-width: 900px;
  padding: 8em 0;
  margin: 0 auto;
  @media only screen and (max-width: 720px) {
    padding: 70px 0;
  }
`;

export default ({ title, inputColor, children, pulse }) => (
  <Container className={`container`}>
    <Title inputColor={inputColor}>{title}</Title>
    {children}
  </Container>
);
