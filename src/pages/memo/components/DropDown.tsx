import { Button } from '@mui/material';
import { useAppDispatch } from '@src/hooks/useRedux';
import { MemoState, deleteMemo } from '@src/store/slices/memoSlice';
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
  justify-content: space-between;
  color: #1f2937;
  background-color: #efefef;
  border-radius: 3px;
  padding: 6px 10px;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  overflow-wrap: break-word;
  flex-wrap: wrap;
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
  padding: clamp(0.5rem, 1vw, 1rem);
  cursor: pointer;
`;

type DropDownProps = {
  memo: MemoState;

  editMemo: Generator;
};

const DropDown: React.FC<DropDownProps> = ({ memo, editMemo }) => {
  const [isLongDescription, setIsLongDescription] = React.useState(isLongContext(memo.detail).status);
  const dispatch = useAppDispatch();
  dayjs.extend(relativeTime);
  const createdDate = dayjs(memo.date);
  const mm = dayjs(memo.date).fromNow();

  const deleteTodo = () => {
    dispatch(deleteMemo(memo.date));
  };

  return (
    <Container>
      <DropBox>
        <Title>
          <h2 className="text-ellipsis w-full">{memo.title}</h2>
          <span className="text-xs text-gray-400">{mm}</span>
        </Title>
        <ControlPanel>
          <Button variant="contained" color="success" onClick={() => editMemo.next()}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={deleteTodo}>
            Delete
          </Button>
        </ControlPanel>
      </DropBox>
      <Content>
        <Description
          onClick={isLongContext(memo.detail).status ? () => setIsLongDescription(prev => !prev) : undefined}>
          <p className="text-ellipsis w-full">{isLongDescription ? isLongContext(memo.detail).context : memo.detail}</p>

          <div className="w-full h-fit flex justify-end">
            <span className="text-end font-thin text-sm text-blue-300">{createdDate.format('MM/DD | YYYY')}</span>
          </div>
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
