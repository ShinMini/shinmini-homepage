import React from 'react';
import { FormEvent } from 'react';

const Comment: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [toDoList, setTodoList] = React.useState<string[]>(['']);

  const addName = (e: FormEvent) => {
    e.preventDefault();

    const name = inputRef.current?.value;
    if (!name) return;
    setTodoList(prevTodoList => [...prevTodoList, name]);
    inputRef.current.value = '';
  };

  return (
    <div className="mt-4 flex flex-col justify-center">
      <div className="mt-4 border rounded">
        <p className="p-3 text-4xl font-bold italic border-b-2">To Do List</p>
        <form className="flex my-2 box-border p-2" onSubmit={addName}>
          <input
            ref={inputRef}
            className="border border-gray-400 p-2 rounded flex-grow mr-2 text-slate-900"
            placeholder="What do you going to do today?"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3">Add</button>
        </form>
        {toDoList.map(
          (todo, index) =>
            !index || (
              <p key={index} className="p-3 text-xl font-bold italic">
                {index}. {todo}
              </p>
            ),
        )}

        <div className="absolute bottom-0 left-2 right-2 mb-2 border rounded box-border pt-2 pr-2 pl-2">
          <div className="flex flex-col">
            <div className="flex justify-between box-border p-2 bg-slate-50 rounded">
              <div className="text-blue-500 ">
                <span className="font-bold text-black">Last Message:</span> Hello World!
                <span className="text-gray-400"> - 3 days ago</span>
              </div>
              <div className="flex">
                <button className="text-green-500 hover:text-green-600 ml-2">Save</button>
                <button className="text-blue-500 hover:text-blue-600 ml-2">Edit</button>
                <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
              </div>
            </div>

            <div className="mt-2">
              <textarea className="border border-gray-400 p-2 rounded w-full text-slate-900" placeholder="Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
