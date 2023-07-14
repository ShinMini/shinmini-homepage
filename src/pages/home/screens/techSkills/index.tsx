import React, { memo } from 'react';
import { styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import SkillDescription from './components/TechDescription';
import TechGraph from './components/TechGraph';
import { Switch } from '@mui/material';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  h1 {
    text-transform: capitalize;
    font-family: ${props => props.theme.fonts.poppins.bold};
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;

  box-sizing: border-box;
  padding: 2rem;
  gap: 2rem;

  border-radius: 5px;
  box-shadow: inset -2px 2px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};

  background-color: ${props => hexToRGBA(props.theme.colors.grayLight)};
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
        <h1>{field}</h1>
        <Switch
          checked={field === frontEnd}
          onChange={() => {
            setField(field === frontEnd ? backEnd : frontEnd);
          }}
        />
      </Header>
      <Content>
        <SkillDescription field={field} />
        <TechGraph field={field} />
      </Content>
    </Container>
  );
});

export default TechSkills;
