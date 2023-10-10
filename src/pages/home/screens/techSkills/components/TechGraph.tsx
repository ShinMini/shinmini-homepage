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

  box-sizing: content-box;
  padding: 1.5rem 1rem;

  border-radius: 10px;
  background-color: ${props => hexToRGBA(props.theme.colors.background, 0.1)};
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;

  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

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

const Icon = styled.div<{ $jump: boolean; $delay: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  animation: ${({ $jump }) => $jump && jumpAnimation} 500ms ease-in-out ${({ $delay }) => $delay * 70 + 50}ms;
`;

const GraphBox = styled.div`
  width: 100%;
  font-size: clamp(1.5rem, 3vw, 2rem);

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
  height: clamp(0.5rem, 1vh, 1rem);
  background-color: ${({ theme }) => theme.colors.warning};
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
    threshold: 0.1,
  });

  if (!graphs) return null;

  return (
    <Content ref={setElement}>
      {graphs.map((graph, index) => (
        <div className="flex flex-col gap-2 mb-2" key={`tech-graph-${index}-${graph.title}`}>
          <Header>
            <Title>
              <Icon $jump={!!entry?.isIntersecting} $delay={index}>
                {graph.icon}
              </Icon>
              <h3>{graph.title}</h3>
            </Title>
            <p className="text-xs sm:text-sm font-bold">{`${graph.percentage}%`}</p>
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
