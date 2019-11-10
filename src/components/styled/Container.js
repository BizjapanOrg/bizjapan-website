import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: static;
  box-sizing: border-box;
  width: 65%;
  min-width: 260px;
  max-width: 900px;
  padding: 8em 0;
  margin: 0 auto;
`;

export default ({ children }) => (
  <Container className={`container`}>{children}</Container>
);
