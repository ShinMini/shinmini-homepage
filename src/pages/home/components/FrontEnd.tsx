import Spacing from '@src/themes/Spacing';
import React from 'react';
import { styled } from 'styled-components';
import { RiReactjsFill } from 'react-icons/ri';
import { BiCodeAlt } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { hexToRGBA } from '@src/features';

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

const FEDesign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-family: 'PoppinsSemiBold';
    font-size: 1.5rem;
    text-decoration: underline;
  }
`;

const FEContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FEHeader = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  align-items: center;

  h3 {
    font-family: 'PoppinsSemiBold';
  }
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  color: ${props => props.color || props.theme.colors.primary};
  margin-right: 0.5rem;
`;

const FEIcon = styled(Icon)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spin 4s linear infinite;
`;

const FEContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Border = styled.div`
  width: 80%;
  margin: 1rem auto;
  height: 3px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
`;

const FrontEnd: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Front End</h1>
      </Header>
      <Content>
        <FEDesign>
          <h1>FE / Design</h1>
          <FEContent>
            <FEHeader>
              <FEIcon>
                <RiReactjsFill />
              </FEIcon>
              <h3>UI / UX Design</h3>
            </FEHeader>
            <FEContext>
              <span>
                Understanding of design principles and user experience (UX) - Frontend Developers work closely with UX
              </span>
              <span>
                designers and need to have an understanding of design principles to create visually appealing and
                intuitive user interfaces.
              </span>
            </FEContext>
          </FEContent>
          <Border />
        </FEDesign>
        <FEDesign>
          <FEHeader>
            <Icon>
              <BiCodeAlt />
            </Icon>
            <h3>Programming Skills</h3>
          </FEHeader>
          <FEContext>
            <span>
              Proficiency in HTML, CSS, and JavaScript - these are the foundational languages of web development and are
            </span>
            <span>essential for creating the user interface and user experience of a website or web application.</span>
          </FEContext>
          <Border />
        </FEDesign>
        <FEDesign>
          <FEHeader>
            <Icon>
              <BsGraphUpArrow />
            </Icon>
            <h3>Optimizes the performance</h3>
          </FEHeader>
          <FEContext>
            <span>
              Knowledge of web performance optimization - Frontend Developers need to ensure that their websites
            </span>
            <span>
              and applications load quickly and perform well on different devices and platforms. essential for creating
              the user interface and user experience of a website or web application.
            </span>
          </FEContext>
        </FEDesign>
      </Content>
    </Container>
  );
};

export default FrontEnd;
