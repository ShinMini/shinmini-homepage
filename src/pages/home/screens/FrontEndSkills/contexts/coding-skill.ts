import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';
import { SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { CodingSkillContext } from '../../../components/CodingSkill';

export const codingSkillContext: Array<Omit<CodingSkillContext, 'index' | 'animate'>> = [
  {
    title: 'HTML',
    icon: RiReactjsFill,
    percentage: 65,
  },
  {
    title: 'CSS',
    icon: IoLogoCss3,
    percentage: 73,
  },
  {
    title: 'Javascript',
    icon: IoLogoJavascript,
    percentage: 91,
  },
  {
    title: 'React',
    icon: SiReact,
    percentage: 79,
  },
  {
    title: 'React Native',
    icon: TbBrandReactNative,
    percentage: 64,
  },
  {
    title: 'Typescript',
    icon: SiTypescript,
    percentage: 84,
  },
];
