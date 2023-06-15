import React from 'react';

import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { TodoListState, pushTodoList } from '@src/store/slices/todoSlice';
import dayjs from 'dayjs';

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
        ...currentTodoList,
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
            const formattedDate = dayjs(date).format('YYYY-MM-DD, HH:mm:ss');
            return (
              <div
                key={`currentTodoList-${title}${index}`}
                className="bottom-0 left-2 right-2 mb-2 border rounded box-border pt-2 pr-2 pl-2 mt-2">
                <div className="flex flex-col">
                  <div className="flex justify-between box-border p-2 bg-slate-50 rounded">
                    <div className="text-blue-500 ">
                      <span className="font-bold text-black">Todo:</span> {title}
                      <span className="text-gray-400"> {detail}</span>
                      <span className="text-gray-400"> {formattedDate}</span>
                      <span className="text-gray-400"> - 3 days ago</span>
                    </div>
                    <div className="flex">
                      <button className="text-green-500 hover:text-green-600 ml-2">Save</button>
                      <button className="text-blue-500 hover:text-blue-600 ml-2">Edit</button>
                      <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
