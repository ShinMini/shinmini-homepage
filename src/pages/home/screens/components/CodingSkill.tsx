import React from 'react';
import { styled } from 'styled-components';

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
    font-family: 'PoppinsSemiBold';
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
  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background)};
  padding: 5px;
`;

const Bar = styled.div<{ percentage }>`
  width: ${props => props.percentage}%;
  height: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 10px;
  transition: width 1s ease-in-out, scale 1s ease-in-out;
  scale: 0;

  &:visible {
    scale: 1;
  }
`;

export type CodingSkillContext = {
  title: string;
  icon?: IconType;
  iconColor?: string;
  percentage: number;
};

const CodingSkill: React.FC<CodingSkillContext> = ({ title, icon = RiReactjsFill, iconColor, percentage }) => {
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
        <Bar percentage={percentage} />
      </GraphBox>
    </CSContent>
  );
};

export default CodingSkill;
