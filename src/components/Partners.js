import React from "react"

// Import styled components
import Container from "./styled/Container"
import Title from "./styled/Title"

// Import an array which stores list of partners.
import PartnerList from "./data/PartnerList"

const Partners = () => (
  <Container>
    <Title>Partners</Title>
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <PartnerCards data={PartnerList} />
    </div>
  </Container>
)

const PartnerCards = props => {
  var data = props.data
  const partners = data.map(partner => {
    return (
      <li>
        {partner.name} {partner.logo}
      </li>
    )
  })

  return <ul>{partners}</ul>
}

export default Partners
