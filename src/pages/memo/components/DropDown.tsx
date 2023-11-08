import { useAppDispatch } from '@hooks/useRedux';
import { MemoState, deleteMemo } from '@src/store/slices/memoSlice';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import React, { useState } from 'react';

import styled from 'styled-components';
import { sp } from '@src/themes';

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
  gap: 10px;
  padding: 3px 5px;

  @media ${sp.sm} {
    padding: 6px 10px;
  }
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

const Description = styled.div<{ $isExpand: boolean }>`
  width: 100%;
  max-height: ${props => (props.$isExpand ? '100%' : '55px')};

  overflow-y: clip;
  text-overflow: ellipsis;

  position: relative;
  overflow-wrap: break-word;
  font-size: 1rem;
  font-weight: normal;
  padding: clamp(0.5rem, 1vw, 1rem);
  cursor: pointer;

  font-size: 0.8rem;

  @media ${sp.sm} {
    font-size: 1rem;
  }
`;

type DropDownProps = {
  memo: MemoState;

  editMemo: Generator;
};

const DropDown: React.FC<DropDownProps> = ({ memo, editMemo }) => {
  const [isExpand, setIsExpand] = useState(false);
  const dispatch = useAppDispatch();
  dayjs.extend(relativeTime);
  const createdDate = dayjs(memo.date);
  const mm = dayjs(memo.date).fromNow();

  return (
    <Container>
      <DropBox>
        <Title>
          <h2 className="text-ellipsis w-full">{memo.title}</h2>
          <span className="text-xs text-gray-400">{mm}</span>
        </Title>
        <ControlPanel>
          <button
            className="px-4 py-2 text-center font-semibold rounded bg-teal-700 text-gray-100"
            onClick={() => editMemo.next()}>
            Edit
          </button>
          <button
            className="px-4 py-2 text-center font-semibold rounded bg-rose-700 text-gray-200"
            onClick={() => dispatch(deleteMemo(memo.date))}>
            Delete
          </button>
        </ControlPanel>
      </DropBox>
      <Content>
        <Description onClick={() => setIsExpand(prev => !prev)} $isExpand={isExpand}>
          <p className="text-ellipsis w-full">{memo.detail}</p>

          <div className="w-full h-fit flex justify-end">
            <span className="text-end font-thin text-sm text-blue-300">{createdDate.format('MM/DD | YYYY')}</span>
          </div>
        </Description>
      </Content>
    </Container>
  );
};

export default React.memo(DropDown);
