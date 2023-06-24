import { Layout } from '@src/components';
import React from 'react';
import Vector from './components/Vector';
import SendMail from '../home/components/SendMail';

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-xl">Lab</h1>
      <Vector />
      <SendMail />
    </Layout>
  );
};

export default Lab;
