import React, { memo } from 'react';
import { styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import SkillDescription from './components/TechDescription';
import TechGraph from './components/TechGraph';

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  overflow: hidden;
`;

const HeaderButton = styled.h1<{ isActive: boolean }>`
  color: ${props => (props.isActive ? props.theme.colors.text : props.theme.colors.gray)};

  background-color: ${props => hexToRGBA(props.theme.colors.background)};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.grayDark};
  }

  &:not(:last-child) {
    margin-right: 15px;
  }

  text-transform: capitalize;
  font-family: ${props => props.theme.fonts.poppins.bold};
  font-size: clamp(1.5rem, 5vw, 2.5rem);

  padding: 0.5rem 1rem;

  box-shadow: ${props => (props.isActive ? props.theme.shadows.sm : `inset ${props.theme.shadows.sm}`)};

  border-top-left-radius: 3px;
  border-top-right-radius: 15px;

  /* transform: translateY(5px); */
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
  /* box-shadow: -2px 2px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)}; */

  background-color: ${props => hexToRGBA(props.theme.colors.background)};
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
        <HeaderButton isActive={frontEnd === field} onClick={() => setField(frontEnd)}>
          {frontEnd}
        </HeaderButton>
        <HeaderButton isActive={backEnd === field} onClick={() => setField(backEnd)}>
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
