import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
