import { Images } from '@src/assets';
import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: clamp(0.5rem, 2vw, 2rem) 0;
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
  width: 100%;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  gap: max(1.5rem, 2.5vh);

  margin: 0 auto;

  & > header {
    h1 {
      font-size: clamp(1.6rem, 3.5vw, 2.5rem);
      font-family: ${props => props.theme.fonts.poppins.semiBold};
    }
    h2 {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.poppins.medium};
    }
  }

  & > article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      width: 95%;
      word-wrap: break-word;
      word-break: break-word;
      color: ${props => props.theme.colors.text};
      font-size: clamp(0.9rem, 1vw, 1.5rem);
      line-height: 1.2;
    }
  }
  & > footer {
    width: 100%;
    display: flex;

    align-items: center;
    margin-top: 1rem;
    gap: clamp(1.5rem, 2vw, 2rem);
    @media (max-width: 600px) {
      justify-content: space-between;
    }

    font-family: ${props => props.theme.fonts.poppins.medium};
  }
`;

const TakeALookButton = styled.button<{ borderColor: string }>`
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  font-weight: 600;
  padding: clamp(0.5rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem);
  border-color: ${props => props.borderColor};
  border-width: 2px;
  border-radius: 15px;

  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => hexToRGBA(props.borderColor, 0.9)};
  box-shadow: 1px 2px 2px 1px ${props => props.theme.colors.opposite.background};
  transition: color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
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
              onClick={() => window.open('https://www.notion.so/shinmini/9fa53b45e7c346f5ac271bdf3d6eaeee', '_blank')}
              borderColor="#F84F4F">
              My Blog
            </TakeALookButton>
          </footer>
        </Context>
      </Content>
    </Container>
  );
};

export default Greeting;
