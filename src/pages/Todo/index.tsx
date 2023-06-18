import { DropDown, Layout } from '@src/components';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
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
import { hexToRGBA } from '@src/features/authentication';

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

    font-family: 'PoppinsMedium';
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 0.5rem;

  height: max(35rem, 60vh);

  background-color: ${props => hexToRGBA(props.theme.colors.opposite.green, 0.9)};

  box-sizing: border-box;

  padding: 1rem 0;
  overflow-y: scroll;

  border-radius: 10px;

  box-shadow: inset -2px 1px 0 0.2rem rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 0.5rem;

    background-color: ${props => hexToRGBA(props.theme.colors.greenDark, 0.5)};
    border-radius: 0.5rem;
  }
`;

const Todo: React.FC = () => {
  const titleInput = React.useRef<HTMLInputElement>(null);
  const detailTextArea = React.useRef<HTMLTextAreaElement>(null);

  const currentTodoList = useAppSelector(state => state.todo.todoList);
  const uid = useAppSelector(state => state.user.uid);
  const dispatch = useAppDispatch();

  const pushTodo = () => {
    const title = titleInput.current?.value;
    const detail = detailTextArea.current?.value;

    const isValidData = validateFormData({ title, detail });

    const todo = {
      uid,
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
    dispatch(deleteTodoList({ uid, targetDate }));
  };

  return (
    <Layout>
      <Header>
        <h1>This is To Do List</h1>
      </Header>
      <Container>
        <TodoListContainer>
          {currentTodoList &&
            currentTodoList.map(({ date, title, detail }, index) => {
              const key = `currentTodoList-${title}${index}`;
              const createdDate = dayjs(date).format('YYYY MM DD, HH:mm:ss');
              const diffDate = dayjs().diff(createdDate, 'minute');

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
