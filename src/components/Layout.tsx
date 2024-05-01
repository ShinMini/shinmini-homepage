import React, { memo } from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/Header';
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

const Layout = ({ children }: { children: React.ReactNode }) => {
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

export default memo(Layout);
