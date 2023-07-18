import { Layout } from '@src/components';
import DropDown from './components/DropDown';
import { useAppSelector, useAppDispatch } from '@src/hooks/useRedux';
import {
  TodoListState,
  pushTodoList,
  TodoListProps,
  updateTodoList,
  deleteTodoList,
} from '@src/store/slices/todoSlice';
import React from 'react';
import { validateFormData } from './utils/validateFormData';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { hexToRGBA } from '@src/features';
import { randomUUID } from 'crypto';
// import { getAuth } from 'firebase/auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.div`
  display: flex;

  margin: 0;
  padding: 0.5rem 1rem;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  h1 {
    margin: 0;
    padding: 0;

    font-family: 'PoppinsSemiBold';
    font-size: 2rem;
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

const Todo: React.FC = () => {
  const titleInput = React.useRef<HTMLInputElement>(null);
  const detailTextArea = React.useRef<HTMLTextAreaElement>(null);

  const currentTodoList = useAppSelector(state => state.todo.todoList);
  // const auth = getAuth();
  // const uid = auth.currentUser?.uid;
  const dispatch = useAppDispatch();

  const pushTodo = () => {
    const title = titleInput.current?.value;
    const detail = detailTextArea.current?.value;

    const isValidData = validateFormData({ title, detail });

    const todo = {
      uid: randomUUID(),
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

  return (
    <Layout>
      <Header>
        <h1>
          What you going <span className=" font-bold text-blue-500">To Do</span>
        </h1>
      </Header>
      <Container>
        <TodoListContainer>
          {currentTodoList &&
            currentTodoList.map(({ date, title, detail }, index) => {
              const key = `currentTodoList-${title}${index}`;
              const createdDate = dayjs(date).format('YY MM.DD HH:mm');
              const diffDate = dayjs().diff(date);

              return (
                <DropDown
                  key={key}
                  editTodo={() => editTodo(date)}
                  deleteTodo={() => deleteTodo(date)}
                  title={title}
                  createdDate={createdDate}
                  diffDate={diffDate}
                  detail={detail}
                />
              );
            })}
        </TodoListContainer>
        <div className="flex flex-col mt-2 box-border p-2">
          <div className="flex">
            <input
              ref={titleInput}
              className="border border-gray-400 p-2 rounded flex-grow mr-2 text-slate-900"
              placeholder="What do you going to do today?"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3"
              onClick={pushTodo}>
              Add
            </button>
          </div>
          <textarea
            ref={detailTextArea}
            className="border border-gray-400 p-2 rounded w-full text-slate-900 mt-2"
            placeholder="details..."
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Todo;
