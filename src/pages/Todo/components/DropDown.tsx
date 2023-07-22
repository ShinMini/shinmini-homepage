import { Button } from '@mui/material';
import { hexToRGBA } from '@src/features';
import Spacing from '@src/themes/Spacing';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  width: 95%;
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
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  @media (max-width: ${Spacing.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }

  & > div {
    display: flex;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Spacing.mobile}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Title = styled.div``;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${Spacing.mobile}) {
    justify-content: flex-end;
  }
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

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 1.2rem;
  cursor: pointer;
`;

type DropDownProps = {
  title: string;
  createdDate: dayjs.Dayjs;
  detail?: string;

  editTodo?: () => void;
  deleteTodo?: () => void;
};

const DropDown: React.FC<DropDownProps> = ({ title, createdDate, detail, editTodo, deleteTodo }) => {
  const [isLongDescription, setIsLongDescription] = React.useState(isLongContext(detail).status);
  dayjs.extend(relativeTime);
  const mm = dayjs(createdDate).fromNow();

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title className="flex justify-between pr-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="text-sm text-blue-300">{mm}</span>
          </Title>
        </TitleContainer>
        <ControlPanel>
          <Button variant="contained" color="info" onClick={editTodo}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={deleteTodo}>
            Delete
          </Button>
        </ControlPanel>
      </Header>
      <Content>
        <Description onClick={isLongContext(detail).status ? () => setIsLongDescription(prev => !prev) : undefined}>
          <p className="text-ellipsis w-full">
            {isLongDescription ? isLongContext(detail).context : detail}

            <div className="w-full flex justify-end">
              <span className="text-end font-semibold text-blue-300">{createdDate.format('YYYY. MMM.DD')}</span>
            </div>
          </p>
        </Description>
      </Content>
    </Container>
  );
};

export default React.memo(DropDown);

function isLongContext(context?: string) {
  if (!context) return { status: false, context: null };

  return { status: context.trim().length > 180, context: context.trim().slice(0, 180) + '...' };
}
