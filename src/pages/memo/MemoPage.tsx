import React, { memo, useCallback, useLayoutEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { Button } from '@mui/material';

import { useAppSelector, useAppDispatch } from '@hooks/useRedux';

import { Layout } from '@src/components';

import { MemoState, addMemo, updateMemo } from '@src/store/slices/memoSlice';

import { validateFormData } from './utils/validate-todo-format';
import DropDown from './components/DropDown';

const slideDown = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const slideUp = keyframes({
  '0%': {
    transform: 'translateY(100%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const AnimationWrapper = styled.div<{ $isDelete: boolean }>`
  position: relative;
  display: flex;
  width: 100%;

  & > div {
    animation: ${props => (props.$isDelete ? slideUp : slideDown)} 500ms ease-out forwards;
  }
`;

const MemoPage: React.FC = () => {
  const [prevMemoLength, setPrevMemoLength] = React.useState(0);
  const [isDelete, setIsDelete] = React.useState(false);

  const titleInput = React.useRef<HTMLInputElement>(null);
  const detailTextArea = React.useRef<HTMLTextAreaElement>(null);

  const memoState = useAppSelector(state => state.memo.memo);
  const dispatch = useAppDispatch();

  // reset call back current text input section
  const reset = useCallback(() => {
    if (!titleInput.current || !detailTextArea.current)
      return console.log('Unexpected Error Occurred: Check your network connection or try again later.');
    titleInput.current.value = '';
    detailTextArea.current.value = '';
  }, [titleInput, detailTextArea]);

  useLayoutEffect(() => {
    const memoLength = memoState.length;

    if (prevMemoLength !== memoLength) {
      // 변경이 발생한 경우
      const isDeleted = memoLength < prevMemoLength;
      setIsDelete(isDeleted);
      setPrevMemoLength(memoLength);
    }
  }, [memoState.length, prevMemoLength, setIsDelete]);

  const pushTodo = () => {
    const title = titleInput.current?.value;
    const detail = detailTextArea.current?.value;
    const validatedSchema = validateFormData({ title, detail });

    if (!validatedSchema.success) {
      alert(Object.values(validatedSchema.error.formErrors.fieldErrors).flat());
      return reset();
    }

    const payload = validatedSchema.data satisfies MemoState;

    dispatch(addMemo(payload));
    return reset();
  };

  function* editTodo(targetDate: Date) {
    if (!titleInput.current || !detailTextArea.current)
      return alert(`Unexpected Error Occurred: Check your network connection or try again later.`);

    yield titleInput.current.focus();

    const title = titleInput.current.value;
    const detail = detailTextArea.current.value;
    const isValidatedSchema = validateFormData({ title, detail });

    if (!isValidatedSchema.success) return console.log(isValidatedSchema.error.cause);
    const memo = isValidatedSchema.data;

    yield dispatch(updateMemo({ targetDate, memo }));
  }

  const S = createStyled();

  return (
    <Layout>
      <h1 className="font-bold text-xl mb-1">Memo</h1>
      <S.Container>
        <S.TodoListContainer>
          {memoState &&
            memoState.toReversed().map(memo => {
              const key = `currentTodoList-${memo.date.toString()}`;

              return (
                <AnimationWrapper key={key} $isDelete={isDelete}>
                  <DropDown editMemo={editTodo(memo.date)} memo={memo} />
                </AnimationWrapper>
              );
            })}
        </S.TodoListContainer>
        <div className="flex flex-col mt-2 box-border p-2 bg-slate-200 rounded">
          <div className="flex gap-4">
            <input
              ref={titleInput}
              placeholder="Title"
              className="text-lg w-full rounded px-2 bg-slate-100 text-zinc-800"
            />
            <Button variant="contained" onClick={pushTodo}>
              save
            </Button>
          </div>
          <textarea
            ref={detailTextArea}
            className="p-2 text-lg rounded w-full min-h-[6rem] text-slate-100 mt-2 backdrop-blur-md bg-slate-900"
            placeholder="Detail(Optional)"
          />
        </div>
      </S.Container>
    </Layout>
  );
};

export default memo(MemoPage);

function createStyled() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${props => props.theme.colors.text};
    border-radius: 0.4rem;
  `;

  const Header = styled.div`
    display: flex;
    text-align: center;
    padding: 0.5rem 1rem;
    h1 {
      font-family: 'PoppinsSemiBold';
      font-size: 1.6rem;
    }
  `;

  const TodoListContainer = styled.div`
    box-shadow: inset -1px 2px 4px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }
    height: 60vh;
    &:first-child {
      padding-top: 0.7rem;
    }
    border-radius: 0.2rem;
    overflow-y: scroll;
  `;

  return {
    Container,
    Header,
    TodoListContainer,
  };
}
