import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar';
import { ScrollRestoration } from 'react-router-dom';
import Footer from './Footer';
import { hexToRGBA } from '@src/features';

const Wrapper = styled.div`
  min-width: 330px;
  width: 100%;
  overflow-x: hidden;

  background: ${props => props.theme.colors.linearBackground};

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  transition: background 700ms linear 100ms;
  background-color: ${props => hexToRGBA(props.theme.colors.background, 0.6)};
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
      <Footer />
    </Wrapper>
  );
};

export default Layout;
