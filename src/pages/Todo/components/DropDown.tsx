import { hexToRGBA } from '@src/features';
import dayjs from 'dayjs';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  width: 96%;
  gap: 0.5rem;
  margin: 0.1rem auto;

  box-sizing: border-box;
  padding: 0.6rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 1px 1px ${props => hexToRGBA(props.theme.colors.opposite.background)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  min-width: 360px;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
  font-size: 1rem;
  font-style: italic;

  color: ${props => props.theme.colors.info};
`;

const Content = styled.div`
  width: 100%;
  transition:
    height 150ms linear 50ms,
    transform 200ms linear 50ms;
  box-sizing: border-box;
  margin: auto;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => props.theme.colors.opposite.background};
  box-shadow: inset -2px 1px 1px 1px ${props => hexToRGBA(props.theme.colors.background, 0.3)};
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 1.2rem;
`;

type DropDownProps = {
  title: string;
  createdDate: string;
  diffDate: string | number;
  detail?: string;

  editTodo?: () => void;
  deleteTodo?: () => void;
};

const DISPLAY_DATE = ['day', 'hour', 'minutes'];

const DropDown: React.FC<DropDownProps> = ({ title, createdDate, diffDate, detail, editTodo, deleteTodo }) => {
  const [isLongDescription, setIsLongDescription] = React.useState(isLongContext(detail).status);
  const mm = dayjs(diffDate)
    .format('DD,,mm')
    .split(',')
    .map((value, index) => {
      if (+value === 0) return null;

      if (index === 0) {
        if (+value === 1) return null;
        return `${+value - 1} ${DISPLAY_DATE[index]} `;
      }
      return `${+value} ${DISPLAY_DATE[index]} `;
    });

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ControlPanel>
          <Button className="text-blue-500 hover:text-blue-600" onClick={editTodo}>
            Edit
          </Button>
          <Button className="text-red-500 hover:text-red-600" onClick={deleteTodo}>
            Delete
          </Button>
        </ControlPanel>
      </Header>
      <Content>
        {isLongDescription ? (
          <Description>
            <SubTitle>
              {createdDate} | {mm.map(e => e)}ago
            </SubTitle>
            {isLongContext(detail).context}
            <span
              style={{ cursor: 'pointer', textAlign: 'right' }}
              className="text-green-300 hover:text-green-600"
              onClick={() => setIsLongDescription(false)}>
              {' '}
              Show more
            </span>
          </Description>
        ) : (
          <Description>
            <SubTitle>
              {createdDate} | {mm.map(e => e)}ago
            </SubTitle>
            {detail}
          </Description>
        )}
      </Content>
    </Container>
  );
};

export default React.memo(DropDown);

function isLongContext(context?: string) {
  if (!context) return { status: false, context: null };

  return { status: context.trim().length > 100, context: context.trim().slice(0, 100) + '...' };
}
