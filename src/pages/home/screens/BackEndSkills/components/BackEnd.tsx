import React from 'react';
import { styled } from 'styled-components';

import { IconType } from 'react-icons';
import { RiReactjsFill } from 'react-icons/ri';
import { hexToRGBA } from '@src/features';

const FEContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FEHeader = styled.div`
  display: flex;
  font-size: 1.2rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  h3 {
    font-family: ${props => props.theme.fonts.poppins.semiBold};
  }
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.color || props.theme.colors.green};
`;

const FEContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: inset -1px 1px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
`;

const Border = styled.div`
  width: 80%;
  margin: 1rem auto;
  height: 3px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 10px;
`;

export type BackEndContext = {
  title: string;
  icon: IconType;
  iconColor?: string;
  description: string[];
};

const BackEnd: React.FC<BackEndContext> = ({ title, icon = RiReactjsFill, description }) => {
  const reactIcon = React.createElement(icon);

  return (
    <FEContent>
      <FEHeader>
        <Icon>{reactIcon}</Icon>
        <h3>{title}</h3>
      </FEHeader>
      <FEContext>
        {description.map((item, index) => (
          <span key={`backend-span-${index}-${item}`}>{item}</span>
        ))}
      </FEContext>
      <Border />
    </FEContent>
  );
};

export default BackEnd;
