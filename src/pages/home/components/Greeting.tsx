import { Images } from '@src/assets';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  margin: 2rem auto;

  width: 100%;
  min-height: max(80vh, 50rem);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.text};

  background: rgb(212, 211, 236);
  background: linear-gradient(
    ${props => props.theme.colors.opposite.background} 0%,
    ${props => props.theme.colors.background} 100%
  );

  border-radius: 10px;

  box-shadow: 0px 0px 0.4rem 0.4rem ${props => props.theme.colors.shadow};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  gap: max(1.5rem, 2.5vh);

  width: 100%;
  height: 100%;

  h1 {
    font-size: max(3rem, 2vw);
    line-height: 1;

    font-family: ${props => props.theme.fonts.poppins.medium};
  }
  h2 {
    font-size: max(1.2rem, 1.5vw);

    color: ${props => props.theme.colors.grayDark};
    font-family: ${props => props.theme.fonts.poppins.medium};
  }

  p {
    font-size: max(0.9rem, 1.4vw);
    line-height: 1.2;
  }
  footer {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 2rem;

    font-family: ${props => props.theme.fonts.poppins.medium};
  }
`;

const TakeALookButton = styled.button<{ borderColor: string }>`
  width: max(9rem, 7vw);
  height: 100%;

  font-size: 0.8rem;
  font-weight: 400;

  padding: 1rem 1.5rem;

  border-color: ${props => props.borderColor};
  border-width: 2px;
  border-radius: min(5rem, 4vw);

  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => props.theme.colors.opposite.background};
`;

const Greeting: React.FC = () => {
  return (
    <Container id="#Greeting">
      <Content>
        <img src={Images.ProfileImage} alt="Profile" />

        <Context>
          <header>
            <h1>
              Hi, I&apos;m <span style={{ color: '#FFD700', fontWeight: 600 }}>HyeonMin Shin</span>
            </h1>
            <h2>A Full Stack Developer</h2>
          </header>
          <article>
            <p>Hello, my name is HyeonMin Shin.</p>
            <p>I am a 23-year-old frontend developer with experience building complex user interfaces,</p>
            <p>managing state, and optimizing performance using React and React Native with TypeScript.</p>
            <p>I live in Seoul, South Korea,</p>
          </article>
          <footer>
            <TakeALookButton type="button" borderColor="#007CED">
              Contact Me
            </TakeALookButton>
            <TakeALookButton type="button" borderColor="#F84F4F">
              See My Work
            </TakeALookButton>
          </footer>
        </Context>
      </Content>
    </Container>
  );
};

export default Greeting;
