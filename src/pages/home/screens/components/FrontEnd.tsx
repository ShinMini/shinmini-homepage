import React from 'react';
import { styled } from 'styled-components';

import { RiReactjsFill } from 'react-icons/ri';
import { BiCodeAlt } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';

import Spacing from '@src/themes/Spacing';
import { hexToRGBA } from '@src/features';
import { IconType } from 'react-icons';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  box-sizing: border-box;
  padding: 2rem;
  gap: 2rem;

  border-radius: 10px;
  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background)};
  box-shadow: 2px 2px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};

  @media (max-width: ${Spacing.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FEDesign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-family: 'PoppinsSemiBold';
    font-size: 1.5rem;
    text-decoration: underline;
  }
`;

const FEContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FEHeader = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  align-items: center;

  h3 {
    font-family: 'PoppinsSemiBold';
  }
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  color: ${props => props.color || props.theme.colors.primary};
  margin-right: 0.5rem;
`;

const FEIcon = styled(Icon)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spin 4s linear infinite;
`;

const FEContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Border = styled.div`
  width: 80%;
  margin: 1rem auto;
  height: 3px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
`;

export type FrontEndContext = {
  title: string;
  icon: IconType;
  iconColor?: string;
  iconAnimation?: boolean;
  description: string[];
};

const FrontEnd: React.FC<FrontEndContext> = ({ title, icon = RiReactjsFill, description, iconAnimation = false }) => {
  const reactIcon = React.createElement(icon);

  return (
    <FEDesign>
      <h1>FE / Design</h1>
      <FEContent>
        <FEHeader>
          {iconAnimation ? <FEIcon>{reactIcon}</FEIcon> : <Icon>{reactIcon}</Icon>}
          <h3>{title}</h3>
        </FEHeader>
        <FEContext>
          {description.map((item, index) => (
            <span key={`frontend-span-${index}-${item}`}>{item}</span>
          ))}
        </FEContext>
      </FEContent>
      <Border />
    </FEDesign>
  );
};

export default FrontEnd;
