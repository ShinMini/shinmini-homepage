import { Navbar } from '@src/components';
import React from 'react';
import { useRouteError } from 'react-router-dom';

type ErrorType = {
  statusText?: string;
  message?: string;
};

const Error: React.FC = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <>
      <Navbar />
      <div id="error-page" className="w-full h-[100vh] flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-slate-400 text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="text-red-400 text-sm">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default Error;
