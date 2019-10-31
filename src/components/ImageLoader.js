import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLoader = () => (
  <StaticQuery
    query={query}
    // Render all the images.
    render={data => {
      return data.images.edges.map(image => {
        return <Img fluid={image.node.childImageSharp.fluid} />
      })
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

export default ImageLoader
