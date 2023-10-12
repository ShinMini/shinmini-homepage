import { Button } from '@mui/material';
import { Navbar } from '@src/components';
import Footer from '@src/components/Footer';
import React, { useMemo } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

type ErrorType = {
  statusText?: string;
  message?: string;
};

const Error: React.FC = () => {
  const error = useRouteError() as ErrorType;
  const navigate = useNavigate();
  const messages = useMemo(() => {
    const origin = error.statusText || error.message || 'Unknown error';
    const token = /([A-Z])*\b(\.\s)/g;
    return origin.replace(token, '.SEP_TOKEN').split('SEP_TOKEN');
  }, [error.statusText, error.message]);

  return (
    <div className="h-screen">
      <Navbar />
      <div id="error-page" className="w-full h-[83.57%] flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold mt-20">
          <i>Oops!</i>
        </h1>
        <p className="text-slate-400 text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <div className="w-[80%] mx-auto break-before-auto text-sm flex flex-col text-center">
          {messages.map((message, index) => (
            <p key={`error-message-${index}`} className={`text-red-500 text-sm break-words block`}>
              <i>{message}</i>
            </p>
          ))}
        </div>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            navigate('/');
          }}>
          Go to Home
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
