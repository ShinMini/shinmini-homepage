import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar';
import { ScrollRestoration } from 'react-router-dom';

const Wrapper = styled.div`
  min-width: 330px;
  width: 100%;
  overflow-x: hidden;
  transition: background-color 700ms linear 300ms;

  background: ${props => props.theme.colors.linearBackground};

  /* background: linear-gradient(to right, #ff7e5f, #feb47b); */
  /* background: linear-gradient(to right, #360033, #0b8793); */
  /* background: linear-gradient(to right, #5a3f37, #2c7744); */
  /* background: linear-gradient(to right, #e6dada, #274046); */
`;

const Container = styled.div`
  max-width: 1980px;
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  transition:
    background-color 300ms linear,
    color 300ms linear;
`;

const InnerSpacing = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
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
