import { Layout } from '@src/components';
import Comment from '@src/components/Comment';
import React from 'react';

const Todo: React.FC = () => {
  return (
    <Layout>
      <h1>This is Todo page</h1>
      <Comment />
    </Layout>
  );
};

export default Todo;
