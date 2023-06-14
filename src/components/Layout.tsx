import React from 'react';
import { styled } from 'styled-components';

import Navbar from '@src/components/navbar/Navbar';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.gray};

  transition: background-color 700ms linear 300ms;

  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;

  margin: 0 auto;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  transition: background-color 300ms linear, color 300ms linear;

  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
