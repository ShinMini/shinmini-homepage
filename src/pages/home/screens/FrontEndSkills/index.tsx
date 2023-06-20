import { hexToRGBA } from '@src/features/hex-to-rgb';
import Spacing from '@src/themes/Spacing';
import React from 'react';
import { styled } from 'styled-components';
import FrontEnd from '../components/FrontEnd';
import { frontEndContext } from '../contexts/front-end';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
`;

const Header = styled.header`
  padding: 0.5rem 1rem;
  h1 {
    font-family: 'PoppinsBold';
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  box-sizing: border-box;
  padding: 2rem;
  gap: 2rem;

  border-radius: 10px;
  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background)};
  box-shadow: 2px 2px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};

  @media (max-width: ${Spacing.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FrontEndSkills: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Front-End Skills</h1>
      </Header>
      <Content>
        {frontEndContext.map((item, index) => (
          <FrontEnd key={index} title={item.title} icon={item.icon} description={item.description} />
        ))}
      </Content>
    </Container>
  );
};

export default FrontEndSkills;
