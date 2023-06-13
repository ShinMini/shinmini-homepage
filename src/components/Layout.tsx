import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.oppositeBackground};
  color: ${props => props.theme.colors.oppositeText};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;

  margin: 0 auto;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>;
    </Wrapper>
  );
};

export default Layout;
