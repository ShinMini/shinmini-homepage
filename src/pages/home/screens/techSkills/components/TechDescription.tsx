import { memo } from 'react';
import { styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import techDescription from '../contexts/tech-description';
import { TechField } from '..';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  font-size: 1.8rem;
  gap: 0.7rem;
  margin-bottom: 0.4rem;

  h3 {
    color: ${props => props.theme.colors.grayDarkest};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fonts.poppins.semiBold};

    transform: translateY(2px);
  }
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: inset -1px 1px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};

  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background, 0.3)};
  mix-blend-mode: difference;
`;

const Border = styled.div`
  width: 80%;
  margin: 1rem auto;
  height: 3px;
  background-color: ${props => props.theme.colors.grayDark};
  border-radius: 10px;
`;

const TechDescription = memo(({ field }: { field: TechField }) => {
  const skills = techDescription.get(field);
  if (!skills) return null;

  return (
    <Content>
      {skills.map((skill, index) => (
        <div key={`skill-context-${index}-${skill.title}`}>
          <Header>
            <Icon>{skill.icon}</Icon>
            <h3>{skill.title}</h3>
          </Header>
          <Context>
            {skill.description.map((item, index) => (
              <span key={`skill-context-span-${index}-${item}`}>{item}</span>
            ))}
          </Context>
          <Border />
        </div>
      ))}
    </Content>
  );
});

export default TechDescription;
