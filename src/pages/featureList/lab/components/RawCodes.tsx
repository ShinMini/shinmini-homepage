const raw = `
import React from 'react';

import styled, { IStyledComponent, keyframes } from 'styled-components';

type StyledProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  StyledContainer: IStyledComponent<'web', T>;
};

const CustomStyledComponent: React.FC<StyledProps> = ({ StyledContainer }) => {
  return (
    <StyledContainer>
      This is Styled Container Element which get params type of <code>styled-components</code>
    </StyledContainer>
  );
};

const springAnimation = keyframes\`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
\`;

const Container = styled.div\`
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 20px;
  margin: 5rem auto;
  width: 300px;
  height: 300px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #d23a3a;
    animation: \${springAnimation} 0.5s ease-in-out;
  }
\`;

export default CustomStyledComponent({ StyledContainer: Container });
`;

const RawCodes = () => {
  return (
    <div className=" min-w-fit max-w-4xl mx-auto bg-slate-400 p-10 rounded">
      <pre>
        <code>{raw}</code>
      </pre>
    </div>
  );
};

export default RawCodes;
