import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: static;
  box-sizing: border-box;
  min-width: 260px;
  width: 65%;
  max-width: 900px;
  padding: 8em 0;
  margin: 0 auto;
`;

export default ({ children }) => (
  <Container className={`container`}>{children}</Container>
);
