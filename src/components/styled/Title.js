import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: black;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 1.5em;
`;

export default ({ children }) => <Title className={`title`}>{children}</Title>;
