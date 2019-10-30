import React from "react"

// Import styled components
import Container from "./styled/Container"
import Title from "./styled/Title"

// Import components
import ProjectCard from "./ProjectCard"

const Platform = () => (
  <Container>
    <Title>Project Platform</Title>
    <div style={{
      display:`flex`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      justifyContent: `center`
    }}>
      <ProjectCard 
        name = "Jump Japam"
        desc = "Providing the real information about studying and working in Japan with students abroad."
      />
      <ProjectCard 
        name =  "M x Space"
        desc = "Holding space medicine study tours during long holidays in spring and summer In order to realize 'The world guaranteed quality of space life (QOSL)'."
      />
      <ProjectCard 
        name = "Nichy"
        desc = "Promoting exchange in terms of human resources between Japan and China by connecting Japanese university students and Chinese companies."
      />
    </div>
  </Container>
)

export default Platform
