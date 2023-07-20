import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar';
import { hexToRGBA } from '@src/features';
import { ScrollRestoration } from 'react-router-dom';

const Wrapper = styled.div`
  min-width: 390px;
  margin: 0;
  padding: 0;
  transition: background-color 700ms linear 300ms;

  position: relative;
  overflow: clip;
  background: linear-gradient(
    ${props => hexToRGBA(props.theme.colors.opposite.background)} 30%,
    ${props => props.theme.colors.background} 100%
  );

  /* background: linear-gradient(to right, #ff7e5f, #feb47b); */
  background: linear-gradient(to right, #1a2980ba, #26d0ceba);

  /* background: linear-gradient(to right, #360033, #0b8793); */
  /* background: linear-gradient(to right, #5a3f37, #2c7744); */
  /* background: linear-gradient(to right, #e6dada, #274046); */
`;

const Container = styled.div`
  max-width: 1980px;
  min-height: 100vh;
  margin: 0 auto;
  color: ${props => props.theme.colors.text};
  transition:
    background-color 300ms linear,
    color 300ms linear;
  box-shadow: 0px 0px 0.4rem 0.4rem ${props => hexToRGBA(props.theme.colors.opposite.background, 0.1)};
`;

const InnerSpacing = styled.div`
  width: calc(100% - 2vw);
  margin: 0 auto;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <InnerSpacing>{children}</InnerSpacing>
      </Container>
      <ScrollRestoration />
    </Wrapper>
  );
};

export default Layout;
