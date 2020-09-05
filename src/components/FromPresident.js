import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Import styled components
import Container from './styled/Container'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Pulse from '../images/pulse.svg'
import president from '../images/president.jpg'
import Img from 'gatsby-image'
const FromPresident = () => {
  const data = useStaticQuery(graphql`
    query {
      president: file(relativePath: { eq: "president.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 550) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container title="From President">
      <Pulse
        style={{
          height: `3em`,
          display: `block`,
          margin: `0 auto 2em`
        }}
      />
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <Img
          fixed={data.president.childImageSharp.fixed}
          alt="President"
          mgStyle={{
            objectFit: 'contain',
            objectPosition: '50% 50%'
          }}
          style={{
            marginBottom: `2em`
          }}
        />
      </div>
      <p style={{ marginBottom: `2em` }}>
        <FormattedMessage
          id="frompresident"
          values={{
            breakingLine: (
              <>
                {' '}
                <br /> <br />{' '}
              </>
            )
          }}
        />
      </p>
      <h2 style={{ textAlign: `right` }}>
        Housei Wang
        <br />
        7th Batch President, Bizjapan
      </h2>
    </Container>
  )
}

export default FromPresident
