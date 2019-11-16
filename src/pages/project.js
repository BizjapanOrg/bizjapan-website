import React from "react";

// import Layout from "../components/layout"
import SEO from "../components/seo";

// Import Components
import WhatIsProject from "../components/WhatIsProject";
import Projects from "../components/Projects";

const SecondPage = () => (
  // <Layout>
  <>
    <SEO title="Projects" />
    <WhatIsProject />
    <Projects />
  </>
  // </Layout>
);

export default SecondPage;
