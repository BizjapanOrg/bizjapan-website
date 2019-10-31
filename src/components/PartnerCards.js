import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PartnerCards = () => (
  <StaticQuery
    query={query}
    // Render all the images.
    render={data => {
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
          {data.images.edges.map(image => {
            return <Img fluid={image.node.childImageSharp.fluid} />
          })}
        </div>
      )
    }}
  />
)

// Import all the images in partners folder.
const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "partners" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PartnerCards
