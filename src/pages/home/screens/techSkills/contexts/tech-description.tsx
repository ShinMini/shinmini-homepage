import { ReactNode } from 'react';

// front-end icons
import { BiCodeAlt } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { RiReactjsFill } from 'react-icons/ri';

// back-end icons
import { BsFillDatabaseFill } from 'react-icons/bs';
import { FaToolbox } from 'react-icons/fa';
import { BiServer } from 'react-icons/bi';
import { TechField } from '..';

type SkillContextType = {
  title: string;
  icon: ReactNode;
  iconColor?: string;
  description: string[];
};

const techDescription = new Map<TechField, SkillContextType[]>();
const frontEndContext: SkillContextType[] = [
  {
    title: 'UI / UX Design',
    icon: <RiReactjsFill color="#61DAFB" />,
    description: [
      'Understanding of design principles and user experience (UX) - Frontend Developers work closely with UX',
      'designers and need to have an understanding of design principles to create visually appealing and intuitive user interfaces.',
    ],
  },
  {
    title: 'Client Side',
    icon: <BiCodeAlt color="#F0DB4F" />,
    description: [
      'Proficiency in HTML, CSS, and JavaScript - these are the foundational languages of web development and are',
      'essential for creating the user interface and user experience of a website or web application.',
    ],
  },
  {
    title: 'Optimizes the performance',
    icon: <BsGraphUpArrow color="#F34B7D" />,
    description: [
      'Knowledge of web performance optimization - Frontend Developers need to ensure that their websites',
      'essential for creating the user interface and user experience of a website or web application.',
    ],
  },
];

const backEndContext: SkillContextType[] = [
  {
    title: 'Proficiency',
    icon: <FaToolbox color="#264653" />,
    description: [
      'Proficiency in programming languages - Backend Developers often work with languages',
      'such as Java, Python, Ruby, or PHP, which are commonly used for server-side development.',
    ],
  },
  {
    title: 'DataBase',
    icon: <BsFillDatabaseFill color="#F9C74F" />,
    description: [
      'Understanding of databases and data storage - Backend Developers need to be familiar with different types of databases and how to design, implement,',
      'and maintain them to support web applications.',
    ],
  },
  {
    title: 'Server',
    icon: <BiServer color="#14213D" />,
    description: [
      'Knowledge of server-side architecture and deployment - Backend Developers need to understand how to set up and deploy servers,',
      'and how to design scalable and fault-tolerant architecture for web applications.',
    ],
  },
];

techDescription.set('front-end', frontEndContext);
techDescription.set('back-end', backEndContext);

export default techDescription;
