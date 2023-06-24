import { BiCodeAlt } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { BackEndContext } from '../components/BackEnd';
import { RiReactjsFill } from 'react-icons/ri';

export const backEndContext: BackEndContext[] = [
  {
    title: 'Back-end',
    icon: RiReactjsFill,
    description: [
      'Understanding of design principles and user experience (UX) - BackEnd Developers work closely with UX',
      'designers and need to have an understanding of design principles to create visually appealing and intuitive user interfaces.',
    ],
  },
  {
    title: 'Programming Skills',
    icon: BiCodeAlt,
    description: [
      'Proficiency in HTML, CSS, and JavaScript - these are the foundational languages of web development and are',
      'essential for creating the user interface and user experience of a website or web application.',
    ],
  },
  {
    title: 'Optimizes the performance',
    icon: BsGraphUpArrow,
    description: [
      'Knowledge of web performance optimization - BackEnd Developers need to ensure that their websites',
      'and applications load quickly and perform well on different devices and platforms. essential for creating the user interface and user experience of a website or web application.',
    ],
  },
];
