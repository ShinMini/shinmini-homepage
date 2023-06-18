import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar';
import { hexToRGBA } from '@src/features/authentication';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.gray};

  transition: background-color 700ms linear 300ms;

  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1900px;
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
    </Wrapper>
  );
};

export default Layout;
