import React from "react"

// Import styled components
import Container from "./styled/Container"
import Title from "./styled/Title"
import ImageLoader from "./ImageLoader"

// Import an array which stores list of partners.
// import PartnerList from "./data/PartnerList"

const Partners = () => (
  <Container>
    <Title>Partners</Title>
    <PartnerCards />
  </Container>
)

const PartnerCards = props => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        textAlign: `center`,
      }}
    >
      {/* {partners} */}
      <ImageLoader />
    </div>
  )
}

export default Partners
