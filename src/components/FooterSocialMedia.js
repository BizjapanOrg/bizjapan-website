import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// A list of Social Media
const FooterSocialMedia = () => (
  <StaticQuery
    query={socialMediaQuery}
    // Render all the images.
    render={data => {
      return (
        <ul
          style={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            textAlign: `center`,
            background: `black`,
            listStyle: `none`,
            margin: `0`,
          }}
        >
          {data.images.edges.map(image => {
            return (
              <li
                key={image.node.name}
                style={{
                  padding: `1.5em`,
                }}
              >
                <Img
                  fixed={image.node.childImageSharp.fixed}
                  imgStyle={{
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                  style={{
                    width: `3em`,
                    maxWidth: ` 220px`,
                    margin: `0 0.5em 1.45em 0.5em`,
                  }}
                />
              </li>
            )
          })}
        </ul>
      )
    }}
  />
)

// Import all the logos of social media.
const socialMediaQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "socialmedia" } }) {
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

export default FooterSocialMedia
