import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 1em;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  color: #707070;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.16));
  transition: 0.4s;
`

export default ({ children }) => (
  <Button className={`button`}>{children}</Button>
)
