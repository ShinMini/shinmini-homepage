import { Layout } from '@src/components';
import React from 'react';
import Vector from './components/Vector';
import MarkDownConvertor from './components/MarkDownConvertor';
import CustomStyledComponent from './components/CustomStyledComponent';
import RawCodes from '@src/components/RawCodes';

const se = {
  title: `text-3xl font-extrabold text-slate-800 bg-pink-200 rounded-xl p-5 my-10`,
  header: `flex bg-slate-200 rounded-xl items-center text-xl p-5 text-extrabold my-10 text-slate-600`,
};

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className={se.title}>이거 될거같은데.. 모음집</h1>
      <hr />
      <h2 className={se.header}>D3, SVG 갖고 놀아보기</h2>
      <Vector />
      <hr />
      <h2 className={se.header}>Mark Down 만들어줘..</h2>
      <MarkDownConvertor />
      <hr />
      <h2 className={se.header}>styled component 타입 분해해보기</h2>
      <RawCodes />
      {CustomStyledComponent}
    </Layout>
  );
};

export default Lab;
