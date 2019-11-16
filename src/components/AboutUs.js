import React from "react";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

const AboutUs = () => (
  <Container title="About Us">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p>
      Bizjapan is a platform where a wide variety of people gather with a global
      perspective and entrepreneurship, and a wide variety of projects are
      running. Bizjapan was founded in 2011 and became an NPO in 2017. We have
      successfully completed 55 projects so far.
      <br />
      <br />
      Currently, 30 members from about 10 countries, mainly students from the
      University of Tokyo, Waseda University, and Keio University, and
      especially this year, under the slogan “Because we love it.” Ten projects
      are in progress, from supporting studying abroad, local revitalization,
      data science, art, to African startups and space medicine.
      <br />
      <br />
      Bizjapan is an NPO where students beyond the difference of gender,
      nationality, university, and interest come together. Here, you can pursue
      a project of your own, with the belief in yourself and your critical eye.
    </p>
  </Container>
);

export default AboutUs;
