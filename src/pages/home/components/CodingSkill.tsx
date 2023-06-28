import React from 'react';
import { keyframes, styled } from 'styled-components';

import { IconType } from 'react-icons';
import { RiReactjsFill } from 'react-icons/ri';
import { hexToRGBA } from '@src/features';

const CSContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 0.5rem;
`;

const CSHeader = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const CSTitle = styled.div`
  display: flex;
  font-size: 1.2rem;
  gap: 0.5rem;
  h3 {
    font-family: ${props => props.theme.fonts.poppins.medium};
  }
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  color: ${props => props.color || props.theme.colors.primary};
`;

const GraphBox = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 7px;
  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background, 0.1)};
  padding: 5px;
`;

const fillUpAnimation = (percentage: number) => keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }
  20% {
  }
  100% {
    opacity: 1;
    width: ${percentage}%;
  }
`;
const Bar = styled.div<{ percentage: number; delay: number }>`
  height: 0.5rem;
  background-color: ${({ theme, percentage }) => (percentage === 1 ? 'transparent' : theme.colors.info)};
  border-radius: 10px;
  animation: ${props => fillUpAnimation(props.percentage)} 1500ms ease-in-out ${props => props.delay * 70 + 500}ms
    forwards;
`;

export type CodingSkillContext = {
  title: string;
  icon?: IconType;
  iconColor?: string;
  percentage: number;
  index: number;
  animate: boolean;
};

const CodingSkill: React.FC<CodingSkillContext> = ({
  title,
  icon = RiReactjsFill,
  iconColor,
  percentage,
  index,
  animate,
}) => {
  const reactIcon = React.createElement(icon);

  return (
    <CSContent>
      <CSHeader>
        <CSTitle>
          <Icon color={iconColor}>{reactIcon}</Icon>
          <h3>{title}</h3>
        </CSTitle>
        <p>{`${percentage}%`}</p>
      </CSHeader>
      <GraphBox>
        <Bar percentage={animate ? percentage : 1} delay={index} />
      </GraphBox>
    </CSContent>
  );
};

export default CodingSkill;
