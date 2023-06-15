import React from 'react';

import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { TodoListState, pushTodoList } from '@src/store/slices/todoSlice';
import dayjs from 'dayjs';
import DropDown from './DropDown';

const FormData = z.object({
  date: z.date().default(() => new Date()),
  title: z.string().min(1).max(18),
  detail: z.string().max(300).optional(),
});

const validateFormData = (inputs: unknown) => {
  const isValidData = FormData.parse(inputs);
  return isValidData;
};

const Comment: React.FC = () => {
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

  return (
    <div className="mt-4 flex flex-col justify-center">
      <div className="mt-4 border rounded">
        <p className="p-3 text-4xl font-bold italic border-b-2">To Do List</p>
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

        {currentTodoList &&
          currentTodoList.map(({ date, title, detail }, index) => {
            const key = `currentTodoList-${title}${index}`;
            const createdDate = dayjs(date).format('YYYY-MM-DD, HH:mm:ss');
            const diffDate = dayjs().diff(createdDate, 'hour');

            return <DropDown key={key} title={title} createdDate={createdDate} diffDate={diffDate} detail={detail} />;
          })}
      </div>
    </div>
  );
};

export default Comment;
