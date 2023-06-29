import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar';
import { hexToRGBA } from '@src/features';
import { ScrollRestoration } from 'react-router-dom';

const Wrapper = styled.div`
  min-width: 390px;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colors.gray};
  transition: background-color 700ms linear 300ms;

  position: relative;
  overflow: clip;
`;

const Container = styled.div`
  max-width: 1980px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: background-color 300ms linear, color 300ms linear;
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
