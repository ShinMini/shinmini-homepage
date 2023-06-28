import { Layout } from '@src/components';
import React from 'react';
import Vector from './components/Vector';
import SendMail from '../home/components/SendMail';
import MarkDown from './components/MarkDown';
import ImageResizer from './components/ImageResizer';

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-xl">Lab</h1>
      <ImageResizer />
      <hr />
      <Vector />
      <hr />
      <MarkDown />
      <hr />
      <SendMail />
    </Layout>
  );
};

export default Lab;
