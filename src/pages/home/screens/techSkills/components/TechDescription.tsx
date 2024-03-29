import { memo } from 'react';
import { styled } from 'styled-components';

import techDescription from '../contexts/tech-description';
import { TechField } from '..';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const Header = styled.div`
  display: flex;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);

  margin-bottom: 4px;

  h3 {
    font-size: clamp(0.8rem, 2vw, 1.4rem);
    font-family: ${props => props.theme.fonts.poppins.semiBold};
    font-weight: 600;
    transform: translateY(2px);
    text-indent: 3mm;
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

  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 0px;
  }

  color: ${props => props.theme.colors.grayDarkest};
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: inset -2px 1.5px 3px 1px rgba(0, 0, 0, 0.1);

  background-color: ${props => props.theme.colors.white};
  mix-blend-mode: none;
`;

const Border = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  height: 3px;
  background-color: ${props => props.theme.colors.gray};
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
              <span className="snap-center" key={`skill-context-span-${index}-${item}`}>
                {item}
              </span>
            ))}
          </Context>
          <Border />
        </div>
      ))}
    </Content>
  );
});

export default TechDescription;
