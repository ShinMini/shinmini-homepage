import { Button } from '@mui/material';
import Spacing from '@src/themes/Spacing';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  padding: 5px;
`;

const DropBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #1f2937;
  background-color: #efefef;
  border-radius: 3px;
  padding: 6px 10px;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${Spacing.mobile}) {
    justify-content: flex-start;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Content = styled.div`
  width: 100%;
  border-radius: 3px;
  color: #efefef;
  background-color: #1f2937;
`;

const Description = styled.div`
  width: 100%;
  position: relative;
  overflow-wrap: break-word;
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
      <DropBox>
        <Title>
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="text-sm text-slate-400 pl-4">{mm}</span>
        </Title>
        <ControlPanel>
          <Button variant="contained" color="success" onClick={editTodo}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={deleteTodo}>
            Delete
          </Button>
        </ControlPanel>
      </DropBox>
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
