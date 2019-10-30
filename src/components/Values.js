import React from "react"

// Import styled components
import Container from "./styled/Container"
import Title from "./styled/Title"

const Values = () => (
  <Container>
    <Title>Our Values</Title>
    <Value 
      title = "Global" 
      desc = "“Global” as Bizjapan puts it is NOT just an “interaction with international students.” It also means crossing over the numerous boundaries — boundaries of countries, fields, age, gender, universities, culture, and so on. Here we assemble, surpassing all those unnecessary boundaries. By getting over them, we co-create and make an impact on the world." 
    />
    <Value 
      title="Entrepreneurship"
      desc="“Entrepreneurship” as Bizjapan puts it is NOT “the act of setting up a business.” We consider it as a mentality where passion and novelty meets, and it rests in the mind of those who wish to make an impact on the world. Sympathy from others, social significance, sustainable model, recirculation of resources — everything starts from here."
    />
  </Container>
)

const Value = props => {
  return (
    <div>
      {/* Title */}
      <h2>{props.title}</h2>
      {/* Exp */}
      <p>{props.desc}</p>
    </div>
  )
}

export default Values
