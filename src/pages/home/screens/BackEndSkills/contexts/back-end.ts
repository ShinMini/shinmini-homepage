import { BsFillDatabaseFill } from 'react-icons/bs';
import { BackEndContext } from '../components/BackEnd';
import { FaToolbox } from 'react-icons/fa';
import { BiServer } from 'react-icons/bi';

export const backEndContext: BackEndContext[] = [
  {
    title: 'Proficiency',
    icon: FaToolbox,
    description: [
      'Proficiency in programming languages - Backend Developers often work with languages',
      'such as Java, Python, Ruby, or PHP, which are commonly used for server-side development.',
    ],
  },
  {
    title: 'DataBase',
    icon: BsFillDatabaseFill,
    description: [
      'Understanding of databases and data storage - Backend Developers need to be familiar with different types of databases and how to design, implement,',
      'and maintain them to support web applications.',
    ],
  },
  {
    title: 'Server',
    icon: BiServer,
    description: [
      'Knowledge of server-side architecture and deployment - Backend Developers need to understand how to set up and deploy servers,',
      'and how to design scalable and fault-tolerant architecture for web applications.',
    ],
  },
];
