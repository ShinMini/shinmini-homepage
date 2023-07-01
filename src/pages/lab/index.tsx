import { Layout } from '@src/components';
import React from 'react';
import Vector from './components/Vector';
import SendMail from '../home/components/SendMail';
import MarkDown from './components/MarkDown';
import ImageResizer from './components/ImageResizer';
import CustomStyledComponent from './components/CustomStyledComponent';
import RawCodes from '@src/components/RawCodes';

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl p-5 underline text-bold">This is a Laboratory</h1>

      <h2 className="text-2xl p-5 underline text-bold my-10 text-fuchsia-500">This is a Image Resizer</h2>
      <ImageResizer />
      <hr />
      <h2 className="text-2xl p-5 underline text-bold my-10 text-yellow-500">This is a D3 & SVG components</h2>
      <Vector />
      <hr />
      <h2 className="text-2xl p-5 underline text-bold my-10 text-blue-500">This is a Mark Down creator</h2>
      <MarkDown />
      <hr />
      <h2 className="text-2xl p-5 underline text-bold my-10 text-emerald-400">
        This is a component which get params type of styled component
      </h2>
      <RawCodes />
      {CustomStyledComponent}
    </Layout>
  );
};

export default Lab;
