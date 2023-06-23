import { Layout } from '@src/components';
import React from 'react';
import Vector from './components/Vector';
import Observable from './components/Observable';

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-xl">Lab</h1>
      <Vector />
      <Observable />
    </Layout>
  );
};

export default Lab;
