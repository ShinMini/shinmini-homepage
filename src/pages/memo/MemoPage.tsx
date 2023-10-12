import React, { memo } from 'react';
import dayjs from 'dayjs';

import styled, { keyframes } from 'styled-components';
import { Button } from '@mui/material';

import { useAppSelector, useAppDispatch } from '@hooks/useRedux';

import { getAuth } from 'firebase/auth';
import { app } from '@lib/firebase';

import { Layout } from '@src/components';

import { TodoListState, pushTodoList, TodoListProps, updateTodoList, deleteTodoList } from '@store/slices/todoSlice';

import { validateFormData } from './utils/validate-todo-format';
import DropDown from './components/DropDown';

const slideDown = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

const AnimationWrapper = styled.div`
  width: 100%;
  &:first-child {
    opacity: 0;
    animation: ${slideDown} 600ms ease-in-out 300ms forwards;
  }
  animation: ${slideDown} 600ms ease-in-out forwards;
`;

const MemoPage: React.FC = () => {
  const titleInput = React.useRef<HTMLInputElement>(null);
  const detailTextArea = React.useRef<HTMLTextAreaElement>(null);

  const currentTodoList = useAppSelector(state => state.todo.todoList);
  const auth = getAuth(app);
  const uid = auth.currentUser?.uid;
  const dispatch = useAppDispatch();

  const pushTodo = () => {
    const title = titleInput.current?.value;
    const detail = detailTextArea.current?.value;
    const isValidData = validateFormData({ title, detail });
    const todo = {
      uid: uid,
      todoList: [
        {
          date: isValidData.date,
          title: isValidData.title,
          detail: isValidData.detail,
        },
      ],
    } satisfies TodoListState;

    dispatch(pushTodoList(todo));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    titleInput.current!.value = '';
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    detailTextArea.current!.value = '';
  };

  const editTodo = (date: Date) => {
    const title = titleInput.current?.value;
    const detail = detailTextArea.current?.value;

    const isValidData = validateFormData({ title, detail });

    const todo = {
      date,
      title: isValidData.title,
      detail: isValidData.detail,
    } satisfies TodoListProps;

    dispatch(updateTodoList(todo));
  };

  const deleteTodo = (targetDate: Date) => {
    dispatch(deleteTodoList({ targetDate }));
  };

  const S = createStyled();

  return (
    <Layout>
      <h1 className="font-bold text-xl mb-1">Memo</h1>
      <S.Container>
        <S.TodoListContainer>
          {currentTodoList &&
            currentTodoList.toReversed().map(({ date, title, detail }, index) => {
              const key = `currentTodoList-${title}${index}`;
              const createdDate = dayjs(date);

              return (
                <AnimationWrapper key={key}>
                  <DropDown
                    editTodo={() => editTodo(date)}
                    deleteTodo={() => deleteTodo(date)}
                    title={title}
                    createdDate={createdDate}
                    detail={detail}
                  />
                </AnimationWrapper>
              );
            })}
        </S.TodoListContainer>
        <div className="flex flex-col mt-2 box-border p-2 bg-slate-200 rounded">
          <div className="flex gap-4">
            <input ref={titleInput} placeholder="Title" className="text-lg w-full rounded px-2 bg-slate-100" />
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
