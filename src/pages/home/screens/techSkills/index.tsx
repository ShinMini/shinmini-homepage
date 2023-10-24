import React, { memo } from 'react';
import { styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import { sp } from '@themes';

import SkillDescription from './components/TechDescription';
import TechGraph from './components/TechGraph';

const Container = styled.div`
  scroll-snap-align: center;
  margin: 2rem auto;
  padding: 2rem 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeaderButton = styled.h1<{ $isActive: boolean }>`
  &:first-child {
    color: ${props => (props.$isActive ? props.theme.colors.success : hexToRGBA(props.theme.colors.text))};
  }
  color: ${props => (props.$isActive ? props.theme.colors.green : hexToRGBA(props.theme.colors.text))};

  background-color: ${props =>
    props.$isActive ? props.theme.colors.background : hexToRGBA(props.theme.colors.white, 0.1)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${props => !props.$isActive && 'inset'} -1px 1px 3px 1px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    display: ${props => (props.$isActive ? 'inline-block' : 'none')};

    width: 5px;
    height: 5px;
    margin-right: 2px;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.yellow};
  }

  &:not(:last-child) {
    margin-right: clamp(0.5rem, 2vw, 1rem);
  }

  text-transform: capitalize;
  font-family: ${props => props.theme.fonts.poppins.bold};
  font-size: clamp(1rem, 3.5vw, 1.4rem);

  padding: 0.5rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 15px;
`;

const Content = styled.div<{ $isActive: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
  gap: 1rem;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-top-left-radius: ${props => (props.$isActive ? '5px' : 0)};

  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  @media ${sp.sm} {
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
      <Content $isActive={field === 'back-end'}>
        <SkillDescription field={field} />
        <TechGraph field={field} />
      </Content>
    </Container>
  );
});

export default TechSkills;
