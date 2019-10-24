import React from "react"
import styled from "styled-components"

const Container = styled.section`
  box-sizing: border-box;
  min-width: 260px;
  width: 65%;
  padding: 7.81% 0;
  position: static;
`

export default ({ children }) => (
  <Container className={`container`}>{children}</Container>
)
