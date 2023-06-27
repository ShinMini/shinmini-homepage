import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import React, { useLayoutEffect } from 'react';
import { styled } from 'styled-components';
import FrontEnd from './components/FrontEnd';
import { frontEndContext } from './contexts/front-end';
import CodingSkill from '../../components/CodingSkill';
import { codingSkillContext } from './contexts/coding-skill';
import { useObserver } from '@src/hooks/useObserver';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
`;

const Header = styled.header`
  padding: 0.5rem 1rem;
  h1 {
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

const FrontEndSkills: React.FC = () => {
  const [isObserved, setIsObserved] = React.useState(false);
  const { setElement, entry } = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useLayoutEffect(() => {
    if (isObserved) return;

    if (entry?.isIntersecting) {
      setIsObserved(true);
    }
  }, [entry, isObserved]);

  return (
    <Container ref={setElement}>
      <Header>
        <h1>Front-End Skills</h1>
      </Header>
      <Content>
        <article>
          <h1>FE / Design</h1>
          {frontEndContext.map((item, index) => (
            <FrontEnd
              key={`frontend-context-${index}-${item}`}
              title={item.title}
              icon={item.icon}
              animation={!+index}
              description={item.description}
            />
          ))}
        </article>
        <article>
          <h1>Coding Skills</h1>
          {codingSkillContext.map((item, index) => (
            <CodingSkill
              key={`coding-skill-${item}-${index}`}
              index={index}
              title={item.title}
              icon={item.icon}
              percentage={item.percentage}
              animate={isObserved}
            />
          ))}
        </article>
      </Content>
    </Container>
  );
};

export default FrontEndSkills;
