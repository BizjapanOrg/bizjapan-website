import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  background-color: black;
  color: white;
  text-align: center;
  font-size: 36px;
  letter-spacing: 2px;
  margin-bottom: 50px;
`

export default ({ children }) => <Title className={`title`}>{children}</Title>
