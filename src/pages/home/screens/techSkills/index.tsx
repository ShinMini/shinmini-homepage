import React, { memo } from 'react';
import { styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import SkillDescription from './components/TechDescription';
import TechGraph from './components/TechGraph';

const Container = styled.div`
  scroll-snap-align: start;
  margin: 2rem auto;
  padding: 2rem 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeaderButton = styled.h1<{ $isActive: boolean }>`
  color: ${props => (props.$isActive ? props.theme.colors.info : props.theme.colors.text)};

  background-color: ${props => hexToRGBA(props.theme.colors.background, 0.6)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${props => !props.$isActive && 'inset'} ${props => props.theme.shadows.sm};

  &:not(:last-child) {
    margin-right: 15px;
  }

  text-transform: capitalize;
  font-family: ${props => props.theme.fonts.poppins.bold};
  font-size: clamp(1.2rem, 5vw, 2rem);

  padding: 0.5rem 1rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 15px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
  gap: 2rem;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;

  background-color: ${props => hexToRGBA(props.theme.colors.background, 0.6)};
  @media (max-width: ${Spacing.mobile}) {
    grid-template-columns: 1fr;
  }

  & > article {
    h1 {
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.poppins.bold};

      font-size: 1.8rem;
      text-decoration: underline;
      margin-bottom: 1.5rem;
    }
  }
`;

export type TechField = 'front-end' | 'back-end';

const [frontEnd, backEnd] = ['front-end', 'back-end'] satisfies TechField[];

const TechSkills = memo(() => {
  const [field, setField] = React.useState<TechField>(frontEnd);

  return (
    <Container>
      <Header>
        <HeaderButton $isActive={frontEnd === field} onClick={() => setField(frontEnd)}>
          {frontEnd}
        </HeaderButton>
        <HeaderButton $isActive={backEnd === field} onClick={() => setField(backEnd)}>
          {backEnd}
        </HeaderButton>
      </Header>
      <Content>
        <SkillDescription field={field} />
        <TechGraph field={field} />
      </Content>
    </Container>
  );
});

export default TechSkills;
