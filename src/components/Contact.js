import React from 'react';

// Import styled components
import Container from './styled/Container';
import Title from './styled/Title';
import Button from './styled/Button';

const Contact = () => (
  <Container>
    <div style={{ paddingBottom: `10em` }}>
      <Title>Contact</Title>
      <p>Paragraph comes in!</p>
      <div style={{ textAlign: 'center' }}>
        <Button>Send a message!</Button>
      </div>
    </div>
  </Container>
);

export default Contact;
