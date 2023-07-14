import { memo } from 'react';
import { keyframes, styled } from 'styled-components';

import { hexToRGBA } from '@src/features';
import techGraph from '../contexts/tech-graph';
import { TechField } from '..';
import { useObserver } from '@src/hooks/useObserver';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  display: flex;
  font-size: 1.2rem;
  gap: 0.5rem;
  h3 {
    font-family: ${props => props.theme.fonts.poppins.medium};
  }
`;

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Icon = styled.div<{ jump: boolean; delay: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  animation: ${({ jump }) => jump && jumpAnimation} 500ms ease-in-out ${({ delay }) => delay * 70 + 50}ms;
`;

const GraphBox = styled.div`
  width: 100%;

  border-radius: 7px;
  background-color: ${props => hexToRGBA(props.theme.colors.opposite.background, 0.1)};
  padding: 5px;
`;

const fillUpAnimation = (percentage: number) => keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: ${percentage}%;
  }
`;

const Bar = styled.div<{ percentage: number; delay: number }>`
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.info};
  border-radius: 10px;
  opacity: 0;
  animation: ${({ percentage }) => fillUpAnimation(percentage)} 1500ms ease-in-out ${({ delay }) => delay * 70}ms
    forwards;
`;

const TechGraph = memo(({ field }: { field: TechField }) => {
  const graphs = techGraph.get(field);
  const { setElement, entry } = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  if (!graphs) return null;

  return (
    <Content ref={setElement}>
      {graphs.map((graph, index) => (
        <div key={`tech-graph-${index}-${graph.title}`}>
          <Header>
            <Title>
              <Icon jump={!!entry?.isIntersecting} delay={index}>
                {graph.icon}
              </Icon>
              <h3>{graph.title}</h3>
            </Title>
            <p>{`${graph.percentage}%`}</p>
          </Header>
          <GraphBox>
            <Bar percentage={entry?.isIntersecting ? graph.percentage : 1} delay={index} />
          </GraphBox>
        </div>
      ))}
    </Content>
  );
});

export default TechGraph;
