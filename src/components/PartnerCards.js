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
            return (
              <Img
                fixed={image.node.childImageSharp.fixed}
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                }}
                style={{
                  width: `30vw`,
                  maxWidth: ` 220px`,
                }}
              />
            )
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
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default PartnerCards
