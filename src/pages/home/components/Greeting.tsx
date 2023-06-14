import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  margin: 1rem auto;

  width: 100%;
  height: 40vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.text};

  background: rgb(212, 211, 236);
  background: linear-gradient(
    rgba(20, 20, 159, 1) 0%,
    rgba(212, 211, 236, 0.5) 80%,
    ${props => props.theme.colors.background} 100%
  );

  border-radius: 1rem;
`;

const Greeting: React.FC = () => {
  return (
    <Container id="#Greeting">
      <h1>Hello, This is Greeting Page!</h1>
    </Container>
  );
};

export default Greeting;
