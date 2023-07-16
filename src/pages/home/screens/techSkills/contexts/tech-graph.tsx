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
    icon: <SiHtml5 color="#E34F26" />,
    percentage: 65,
  },
  {
    title: 'CSS',
    icon: <SiCss3 color="#264DE4" />,
    percentage: 73,
  },
  {
    title: 'Javascript',
    icon: <SiJavascript color="#F7DF1E" />,
    percentage: 91,
  },
  {
    title: 'React',
    icon: <SiReact color="#61DAFB" />,
    percentage: 79,
  },
  {
    title: 'React Native',
    icon: <TbBrandReactNative color="#61DAFB" />,
    percentage: 64,
  },
  {
    title: 'Typescript',
    icon: <SiTypescript color="#3178C6" />,
    percentage: 84,
  },
];

const backendGraphs: Array<TechGraphProps> = [
  {
    title: 'Node.js / Express.js',
    icon: <IoLogoNodejs color="#8CC84B" />,
    percentage: 75,
  },
  {
    title: 'Java Spring',
    icon: <SiSpring color="#6DB33F" />,
    percentage: 43,
  },
  {
    title: 'Flask',
    icon: <FaFlask color="#000000" />,
    percentage: 34,
  },
  {
    title: 'Nest.js',
    icon: <SiNestjs color="#E0234E" />,
    percentage: 55,
  },
  {
    title: 'MySQL',
    icon: <SiMysql color="#4479A1" />,
    percentage: 59,
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb color="#47A248" />,
    percentage: 44,
  },
  {
    title: 'PostgreSQL',
    icon: <SiPostgresql color="#336791" />,
    percentage: 34,
  },
  {
    title: 'Redis',
    icon: <SiRedis color="#DC382D" />,
    percentage: 4,
  },
  {
    title: 'Firebase',
    icon: <SiFirebase color="#FFCA28" />,
    percentage: 72,
  },
  {
    title: 'AWS',
    icon: <FaAws color="#232F3E" />,
    percentage: 64,
  },
];

const techGraph = new Map<TechField, TechGraphProps[]>();

techGraph.set('front-end', frontEndGraphs);
techGraph.set('back-end', backendGraphs);

export default techGraph;
