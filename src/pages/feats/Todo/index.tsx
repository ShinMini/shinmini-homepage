import { Layout } from '@src/components';
import { useAppSelector, useAppDispatch } from '@src/hooks/useRedux';
import {
  TodoListState,
  pushTodoList,
  TodoListProps,
  updateTodoList,
  deleteTodoList,
} from '@src/store/slices/todoSlice';
import React from 'react';
import { validateFormData } from './utils/validate-todo-format';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { hexToRGBA } from '@src/features';
import { getAuth } from 'firebase/auth';
import { app } from '@src/lib/firebase';
import { Button } from '@mui/material';
import DropDown from './components/DropDown';

const Todo: React.FC = () => {
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
      <S.Container>
        <S.Header>
          <h1 className="font-bold">어우 하기싫어</h1>
        </S.Header>
        <S.TodoListContainer>
          {currentTodoList &&
            currentTodoList.map(({ date, title, detail }, index) => {
              const key = `currentTodoList-${title}${index}`;
              const createdDate = dayjs(date);

              return (
                <DropDown
                  key={key}
                  editTodo={() => editTodo(date)}
                  deleteTodo={() => deleteTodo(date)}
                  title={title}
                  createdDate={createdDate}
                  detail={detail}
                />
              );
            })}
        </S.TodoListContainer>
        <div className="flex flex-col mt-2 box-border p-2">
          <div className="flex gap-4">
            <input ref={titleInput} placeholder="Todo Title" className="w-full rounded px-2 bg-blue-100" />
            <Button
              variant="contained"
              onClick={pushTodo}
              sx={{ paddingRight: 4, paddingLeft: 4, fontWeight: 700, fontSize: 20 }}>
              Add
            </Button>
          </div>
          <textarea
            ref={detailTextArea}
            className="p-2 rounded w-full min-h-[6rem] text-slate-900 mt-2 backdrop-blur-md bg-yellow-100"
            placeholder="details..."
          />
        </div>
      </S.Container>
    </Layout>
  );
};

export default Todo;

function createStyled() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: ${props => props.theme.colors.text};
    background-color: ${props => hexToRGBA(props.theme.colors.background, 0.5)};
    border-radius: 0.4rem;

    backdrop-filter: blur(5px);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: max(35rem, 60vh);
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
  `;

  const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: max(35rem, 60vh);
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
  `;

  const TodoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${props => hexToRGBA(props.theme.colors.opposite.background)};
  `;

  return {
    Container,
    Header,
    TodoListContainer,
    TodoList,
    TodoItem,
  };
}