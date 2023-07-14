import { ReactNode } from 'react';

import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiFirebase, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiRedis, SiSpring } from 'react-icons/si';
import { FaAws, FaFlask } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { TechField } from '..';

export type TechGraphProps = {
  title: string;
  icon: ReactNode;
  iconColor?: string;
  percentage: number;
};

const frontEndGraphs: TechGraphProps[] = [
  {
    title: 'HTML',
    icon: <SiHtml5 color="red" />,
    percentage: 65,
  },
  {
    title: 'CSS',
    icon: <SiCss3 color="blue" />,
    percentage: 73,
  },
  {
    title: 'Javascript',
    icon: <SiJavascript color="#ffc93c" />,
    percentage: 91,
  },
  {
    title: 'React',
    icon: <SiReact color="lightblue" />,
    percentage: 79,
  },
  {
    title: 'React Native',
    icon: <TbBrandReactNative color="skyblue" />,
    percentage: 64,
  },
  {
    title: 'Typescript',
    icon: <SiTypescript color="darkblue" />,
    percentage: 84,
  },
];

const backendGraphs: Array<TechGraphProps> = [
  {
    title: 'Node.js / Express.js',
    icon: <IoLogoNodejs />,
    percentage: 75,
  },
  {
    title: 'Java Spring',
    icon: <SiSpring />,
    percentage: 43,
  },
  {
    title: 'Flask',
    icon: <FaFlask />,
    percentage: 34,
  },
  {
    title: 'Nest.js',
    icon: <SiNestjs />,
    percentage: 55,
  },
  {
    title: 'MySQL',
    icon: <SiMysql />,
    percentage: 59,
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb />,
    percentage: 44,
  },
  {
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
    percentage: 34,
  },
  {
    title: 'Redis',
    icon: <SiRedis />,
    percentage: 4,
  },
  {
    title: 'Firebase',
    icon: <SiFirebase />,
    percentage: 72,
  },
  {
    title: 'AWS',
    icon: <FaAws />,
    percentage: 64,
  },
];

const techGraph = new Map<TechField, TechGraphProps[]>();

techGraph.set('front-end', frontEndGraphs);
techGraph.set('back-end', backendGraphs);

export default techGraph;
