import React from "react"
import styled from "styled-components"

const Container = styled.section`
  position: static;
  box-sizing: border-box;
  background-color: red;
  width: 65%;
  min-width: 260px;
  padding: 10em 0 0 0;
  margin: 0 auto;
`

export default ({ children }) => (
  <Container className={`container`}>{children}</Container>
)
