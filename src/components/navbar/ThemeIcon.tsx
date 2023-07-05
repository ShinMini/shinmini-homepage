import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

type Props = {
  currentColor: 'light' | 'dark';
};

const ThemeIcon: React.FC<Props> = ({ currentColor }) => (
  <motion.div initial={{ y: 0, scale: 1 }} whileTap={{ y: [80, 0], scale: 0.1 }}>
    {currentColor === 'light' ? <HiSun size={30} color="f3AEBE" /> : <HiMoon size={30} color="yellow" />}
  </motion.div>
);

export default ThemeIcon;
