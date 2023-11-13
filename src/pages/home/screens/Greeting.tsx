import React from 'react';
import { keyframes, styled } from 'styled-components';

import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { sp } from '@themes';

import Button from '@components/Button';
import { Link } from 'react-router-dom';
import AsciiImage from '@src/assets/images/ascii';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  opacity: 0;
  margin: 0 auto;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.linearFilter};
  border-radius: 10px;
  box-shadow: 0px 0px 0.4rem 0.4rem ${props => props.theme.colors.shadow};
  animation: ${slideUp} 1s ease-in-out forwards;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;

  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 1rem;

  @media ${sp.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0.2rem;
  }

  @media ${sp.sm} and (min-height: 600px) {
    padding: 2rem;
  }
`;

const IconButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  border: none;
  border-radius: 50%;
  padding: 0.5rem;

  backdrop-filter: blur(10px);

  cursor: pointer;
`;

const Context = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  justify-content: space-around;
  align-items: flex-start;

  gap: min(0.7rem, 2.5vh);

  margin: 0 auto;
  opacity: 0;
  animation: ${slideLeft} 500ms ease-in-out 700ms forwards;

  & > header {
    h1 {
      font-size: clamp(1.6rem, 3.5vw, 2.5rem);
      font-family: ${props => props.theme.fonts.poppins.semiBold};
    }
    h2 {
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-family: ${props => props.theme.fonts.poppins.medium};
    }
  }

  & > article {
    display: flex;
    flex-direction: column;
    p {
      width: 95%;
      word-wrap: break-word;
      word-break: break-word;
      color: ${props => props.theme.colors.text};
      font-size: clamp(0.6rem, 1.2vw, 1.2rem);
      font-family: ${props => props.theme.fonts.poppins.regular};
      font-weight: 550;
      line-height: 1.2;
    }
  }
`;

const Greeting: React.FC = () => {
  return (
    <Container id="#Greeting">
      <Content>
        <AsciiImage />
        <Context>
          <header>
            <h1>
              Hi, I&apos;m <span style={{ color: '#0d6a09', fontWeight: 600 }}>HyeonMin Shin</span>
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
          <div className="flex w-full justify-center items-center gap-2 mt-4 max-w-lg">
            <Button className="w-1/3" color="#264653" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Contact
            </Button>
            <Button
              className="w-1/3"
              color="#2A9D8F"
              onClick={() => window.open('https://dev-shinmini.web.app/', '_blank')}>
              Blog
            </Button>

            <Button
              className="w-1/3"
              onClick={() =>
                window.open('https://docs.google.com/document/d/1G0RCOXg1JHimk4klJ4GsxbxgjNcggG3Y/edit', '_blank')
              }
              color="#E9C46A">
              CV
            </Button>
          </div>
        </Context>
      </Content>
      <div className="flex self-end mr-6 gap-1">
        <IconButton to="https://www.instagram.com/shin__mini" target="_blank" rel="noopener noreferrer">
          <BsInstagram size={25} color="hotpink" />
        </IconButton>
        <IconButton to="https://www.linkedin.com/in/shinmini/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={25} color="#007CED" />
        </IconButton>
        <IconButton to="https://www.github.com/shinmini" target="_blank" rel="noopener noreferrer">
          <BsGithub size={25} />
        </IconButton>
      </div>
    </Container>
  );
};

export default Greeting;
