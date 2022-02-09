import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
            listStyle: `none`,
            margin: `0`,
            marginBottom: `2em`
          }}
        >
          <li key={data.note.name} style={{ margin: `0` }}>
            <a
              href="https://note.mu/bizjapan"
              aria-label="Check our Note.mu page."
            >
              <Img
                fixed={data.note.childImageSharp.fixed}
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "50% 50%"
                }}
                style={{
                  width: `2.5em`,
                  maxWidth: ` 220px`,
                  margin: `0 4vw`
                }}
              />
            </a>
          </li>
          <li key={data.insta.name} style={{ margin: `0` }}>
            <a
              href="https://www.instagram.com/bizjapan.gram/"
              aria-label="Check our Instagram page."
            >
              <Img
                fixed={data.Instagram.childImageSharp.fixed}
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "50% 50%"
                }}
                style={{
                  width: `2.5em`,
                  maxWidth: ` 220px`,
                  margin: `0 4vw`
                }}
              />
            </a>
          </li>
          <li key={data.twitter.name} style={{ margin: `0` }}>
            <a
              href="https://twitter.com/BizjapanOrg"
              aria-label="Check our twitter page."
            >
              <Img
                fixed={data.twitter.childImageSharp.fixed}
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "50% 50%"
                }}
                style={{
                  width: `2.5em`,
                  maxWidth: ` 220px`,
                  margin: `0 4vw`
                }}
              />
            </a>
          </li>
        </ul>
      );
    }}
  />
);

// Import all the logos of social media.
const socialMediaQuery = graphql`
  query {
    insta: file(relativePath: { eq: "socialmedia/insta.png" }) {
      name
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    note: file(relativePath: { eq: "socialmedia/note.png" }) {
      name
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(relativePath: { eq: "socialmedia/twitter.png" }) {
      name
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default FooterSocialMedia;
