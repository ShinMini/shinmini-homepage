import { Button } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown: React.FC = () => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [text, setText] = React.useState<string>('');

  const makeHtml = () => {
    if (textAreaRef.current) {
      setText(textAreaRef.current.value);
    }
  };

  return (
    <div>
      <h1>MarkDown</h1>
      <ReactMarkdown>{text}</ReactMarkdown>
      <p>hello ?</p>
      <div className=" capitalize flex flex-col content-around gap-5 mx-auto w-2/3 h-1/2 bg-indigo-400 rounded-xl">
        <h2 className="text-xl text-center ">convert to Mark Down</h2>
        <textarea name="text" id="text" cols={30} rows={10} ref={textAreaRef} className="w-full h-1/3" />
        <Button type="submit" onClick={() => makeHtml()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default MarkDown;
