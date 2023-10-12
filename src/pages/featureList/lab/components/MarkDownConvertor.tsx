import { Button, Card, TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDownConvertor: React.FC = () => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [text, setText] = React.useState<string>('Hello **MarkDown** on `React`');

  const makeHtml = () => {
    if (textAreaRef.current) {
      setText(textAreaRef.current.value);
    }
  };

  return (
    <div className="flex flex-col gap-2 mx-auto min-w-xl max-w-3xl my-4">
      <div className="px-4 py-2 flex bg-slate-300 rounded  my-4 shadow-md">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <Card>
        <div className="flex gap-2 shadow p-4">
          <TextField disabled fullWidth label="Convert to MD format" />
          <Button variant="contained" onClick={makeHtml}>
            Submit
          </Button>
        </div>
        <TextareaAutosize
          name="text"
          id="text"
          minRows={10}
          ref={textAreaRef}
          defaultValue={text}
          className="p-4 mt-2 w-full"
        />
      </Card>
    </div>
  );
};

export default MarkDownConvertor;
