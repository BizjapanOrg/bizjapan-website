import React from "react"

// Import styled components
import Container from "./styled/Container"
import Title from "./styled/Title"

// Import an array which stores list of partners.
import PartnerList from "./data/PartnerList"

const Partners = () => (
  <Container>
    <Title>Partners</Title>
    <PartnerCards data={PartnerList} />
  </Container>
)

const PartnerCards = props => {
  var data = props.data
  const partners = data.map(partner => {
    return (
      <div
        style={{
          width: `30vw`,
          maxWidth: `220px`,
          verticalAlign: `middle`,
          margin: `0 0.5em 1.45em 0.5em`,
        }}
      >
        {partner.alt}
      </div>
    )
  })

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
      {partners}
    </div>
  )
}

export default Partners
