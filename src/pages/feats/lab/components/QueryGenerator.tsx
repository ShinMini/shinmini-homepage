import React from 'react';
import ReviewGenerator from '@src/pages/feats/lab/utils/query-generator';

import { BiCopy } from 'react-icons/bi';

const QueryGenerator = () => {
  const [count, setCount] = React.useState(5);
  const [query, setQuery] = React.useState('');

  const handleClickButton = () => {
    const generator = new ReviewGenerator(count);
    const _query = generator.generateAll();
    setQuery(_query);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(query);
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-4 text-lg font-bold">
        <input
          className="rounded shadow p-2 bg-slate-100 text-slate-700"
          type="number"
          value={count}
          onChange={handleCountChange}
        />
        <button className="flex px-4 py-2 bg-blue-100 text-slate-700 rounded" onClick={handleClickButton}>
          Generate
        </button>
      </div>

      <div className="flex w-full relative pt-4 pr-4 shadow ">
        <div className="text-slate-700 absolute top-0 right-0 p-2 rounded-full shadow bg-gray-100 opacity-90">
          <BiCopy size={24} className="cursor-pointer shadow-amber-100" onClick={handleCopy} />
        </div>
        <textarea value={query} readOnly className="flex bg-yellow-50 rounded text-black p-2 min-h-[40rem] w-full" />
      </div>
    </div>
  );
};

export default QueryGenerator;
