import { SiFirebase, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiRedis, SiSpring } from 'react-icons/si';
import { FaAws, FaFlask } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { CodingSkillContext } from '@src/pages/home/components/CodingSkill';

export const codingSkillContext: Array<Omit<CodingSkillContext, 'index' | 'animate'>> = [
  {
    title: 'Node.js / Express.js',
    icon: IoLogoNodejs,
    percentage: 75,
  },
  {
    title: 'Java Spring',
    icon: SiSpring,
    percentage: 43,
  },
  {
    title: 'Flask',
    icon: FaFlask,
    percentage: 34,
  },
  {
    title: 'Nest.js',
    icon: SiNestjs,
    percentage: 55,
  },
  {
    title: 'MySQL',
    icon: SiMysql,
    percentage: 59,
  },
  {
    title: 'MongoDB',
    icon: SiMongodb,
    percentage: 74,
  },
  {
    title: 'PostgreSQL',
    icon: SiPostgresql,
    percentage: 54,
  },
  {
    title: 'Redis',
    icon: SiRedis,
    percentage: 34,
  },
  {
    title: 'Firebase',
    icon: SiFirebase,
    percentage: 72,
  },
  {
    title: 'AWS',
    icon: FaAws,
    percentage: 64,
  },
];
