import React, { memo, useCallback, useLayoutEffect } from 'react';

import styled, { keyframes } from 'styled-components';

import { useAppSelector, useAppDispatch } from '@hooks/useRedux';

import { Layout } from '@src/components';

import { MemoState, addMemo, updateMemo } from '@src/store/slices/memoSlice';

import { validateFormData } from './utils/validate-todo-format';
import DropDown from './components/DropDown';
import { sp } from '@src/themes';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: 1080px;
  margin: 0 auto;

  color: ${props => props.theme.colors.text};
  border-radius: 0.4rem;

  font-size: 0.8rem;

  @media ${sp.sm} {
    font-size: 1rem;
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
      return console.error('Unexpected Error Occurred: Check your network connection or try again later.');
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

  return (
    <Layout>
      <h1 className="font-bold text-lg lg:text-3xl mb-1">Memo</h1>
      <Container>
        <TodoListContainer>
          {memoState &&
            memoState.toReversed().map(memo => {
              const key = `currentTodoList-${memo.date.toString()}`;

              return (
                <AnimationWrapper key={key} $isDelete={isDelete}>
                  <DropDown editMemo={editTodo(memo.date)} memo={memo} />
                </AnimationWrapper>
              );
            })}
        </TodoListContainer>
        <div className="flex flex-col box-border rounded bg-zinc-800 text-zinc-800 text-sm lg:text-md gap-1 p-1">
          <div className="flex gap-1">
            <input ref={titleInput} placeholder="Title" className="w-full rounded px-2 bg-slate-50 text-zinc-900" />
            <button className="px-4 py-2 text-center font-semibold rounded bg-sky-600 text-gray-100" onClick={pushTodo}>
              Save
            </button>
          </div>
          <textarea
            ref={detailTextArea}
            className="p-2 rounded w-full min-h-[6rem] bg-gray-200 backdrop-blur-md"
            placeholder="Detail(Optional)"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default memo(MemoPage);
