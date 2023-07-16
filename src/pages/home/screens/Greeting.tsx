import { Images } from '@src/assets';
import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  min-height: max(70vh, 50rem);
  padding-bottom: max(4rem, 8vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};
  background: linear-gradient(
    ${props => hexToRGBA(props.theme.colors.opposite.background)} 30%,
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

  img {
    width: 80%;
    margin: auto;
  }

  @media (max-width: ${Spacing.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  gap: max(1.5rem, 2.5vh);

  margin: 0 auto;

  width: 100%;
  height: 100%;

  & > header {
    h1 {
      font-size: max(2rem, 3.5vw);
      font-family: ${props => props.theme.fonts.poppins.semiBold};
    }
    h2 {
      font-size: max(1.3rem, 1.5vw);
      color: ${props => props.theme.colors.error};
      font-family: ${props => props.theme.fonts.poppins.medium};
    }
  }

  & > article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      max-width: 90%;
      font-size: min(0.8rem, 10vh);
      line-height: 1.2;
    }
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
  width: max(10rem, 13vw);
  height: 100%;
  font-size: 0.8em;
  font-weight: 600;
  padding: 0.9rem 0.3rem;
  border-color: ${props => props.borderColor};
  border-width: 2px;
  border-radius: min(5rem, 4vw);
  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => props.theme.colors.opposite.background};
  box-shadow: 1px 2px 0.2rem 0.1rem ${props => props.theme.colors.opposite.background};
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 0.1rem 0.1rem ${props => props.theme.colors.opposite.background};

    color: ${props => props.theme.colors.yellow};
  }
`;

const Greeting: React.FC = () => {
  return (
    <Container id="#Greeting">
      <Content>
        <img
          src={Images.ProfileImage.Medium}
          srcSet={`${Images.ProfileImage.Small} 260w, ${Images.ProfileImage.Medium} 400w, ${Images.ProfileImage.Large} 628w`}
          sizes="(max-width: 628px) 260px, (max-width: 1024px) 400px, 628px"
          alt="Profile"
        />

        <Context>
          <header>
            <h1>
              Hi, I&apos;m <span style={{ color: '#FFD700', fontWeight: 600 }}>HyeonMin Shin</span>
            </h1>
            <h2>A Full Stack Developer</h2>
          </header>
          <article>
            <p>Hello, my name is HyeonMin Shin.</p>
            <p>
              I am a 23-year-old frontend developer with experience building complex user interfaces, managing state,
              and optimizing performance using React and React Native with TypeScript.
            </p>
            <p>Now, I live in Seoul (서울), South Korea (한국)</p>
          </article>
          <footer>
            <TakeALookButton
              type="button"
              borderColor="#007CED"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Contact Me
            </TakeALookButton>
            <TakeALookButton
              type="button"
              onClick={() => window.open('https://github.com/ShinMini', '_blank')}
              borderColor="#F84F4F">
              See My Work
            </TakeALookButton>
          </footer>
        </Context>
      </Content>
    </Container>
  );
};

export default Greeting;
