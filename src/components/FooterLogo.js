import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div style={{ width: `10em`, margin: `0 auto` }}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='Logo white'
        imgStyle={{
          objectFit: 'contain',
          objectPosition: '50% 50%'
        }}
      />
    </div>
  );
};
