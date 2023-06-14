import React from 'react';
import { FormEvent } from 'react';

const style = {
  container: ``,
  input: `border border-gray-400 p-2 rounded `,
  error: `text-red-500 text-xs italic hidden`,
  success: `text-green-500 text-xs italic hidden`,
  cardContainer: `border border-gray-400 p-2 rounded mt-2 flex flex-col`,
};

const Comment: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [nameArr, setNameArr] = React.useState<string[]>(['']);

  const addName = (e: FormEvent) => {
    e.preventDefault();

    const name = inputRef.current?.value;
    if (!name) return;
    setNameArr(prevNameArr => [...prevNameArr, name]);

    console.log(nameArr);

    inputRef.current.value = '';
  };

  return (
    <div className="mt-4 flex flex-col justify-center">
      <div className="mt-4">
        {nameArr.map((name, index) => (
          <p key={index} className="border rounded p-3 text-gray-800 text-4xl font-bold italic">
            {name || 'Leave your name...'}
          </p>
        ))}
        <form className="flex" onSubmit={addName}>
          <input
            ref={inputRef}
            className="border border-gray-400 p-2 rounded flex-grow mr-2"
            placeholder="Put your name"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3">Submit</button>
        </form>

        <div className="mt-4">
          <p className={style.error}>Error</p>
          <p className={style.success}>Success</p>

          <div className={style.cardContainer}>
            <div className="flex justify-between">
              <div className="text-blue-500">
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
              <textarea className="border border-gray-400 p-2 rounded w-full" placeholder="Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
