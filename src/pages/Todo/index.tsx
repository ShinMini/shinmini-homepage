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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
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
      <Container>
        <h1 className="p-3 m-3 text-4xl text-yellow-400 font-bold italic border-b-2">To Do List </h1>
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

        <div className="flex flex-col my-2 box-border p-2">
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
