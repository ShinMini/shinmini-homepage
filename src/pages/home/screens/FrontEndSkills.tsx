import { hexToRGBA } from '@src/features/hex-to-rgb';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;

  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background)};
  box-shadow: 2px 2px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
`;

const FrontEnd: React.FC = () => {
  return <Container></Container>;
};

export default FrontEnd;
