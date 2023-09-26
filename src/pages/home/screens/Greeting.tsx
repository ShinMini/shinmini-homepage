import { Images } from '@src/assets';
import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import React from 'react';
import { styled } from 'styled-components';

import Button from '@src/components/Button';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import IconButton from '@src/components/IconButton';

const Container = styled.div`
  scroll-snap-align: start;
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
    width: 70%;
    margin: auto 5%;
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

    font-family: ${props => props.theme.fonts.poppins.medium};
  }
`;
const openToPopup = (link: string) => {
  try {
    window.open(link, '_blank');
    return;
  } catch (e) {
    if (e instanceof DOMException) {
      return alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
    }
    throw e;
  }
};
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
            <Button color="#007CED" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Contact
            </Button>
            <Button
              onClick={() => window.open('https://www.notion.so/shinmini/9fa53b45e7c346f5ac271bdf3d6eaeee', '_blank')}
              color="#F84F4F">
              My Blog
            </Button>
          </footer>
        </Context>
      </Content>
      <div className="flex self-end mr-6 gap-1">
        <IconButton
          icon={<BsInstagram size={25} color="hotpink" />}
          onClick={() => openToPopup('https://www.instagram.com/shin__mini')}
        />
        <IconButton
          icon={<BsLinkedin size={25} color="#007CED" />}
          onClick={() => openToPopup('https://www.linkedin.com/in/shinmini/')}
        />
        <IconButton icon={<BsGithub size={25} />} onClick={() => openToPopup('https://www.github.com/shinmini')} />
      </div>
    </Container>
  );
};

export default Greeting;
