import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

type Props = {
  currentColor: 'light' | 'dark';
  colorChangeHandler: () => void;
};

const ThemeIcon: React.FC<Props> = ({ currentColor, colorChangeHandler }) => (
  <motion.div initial={{ y: 0 }} whileTap={{ y: [60, 0] }}>
    {currentColor === 'light' ? (
      <HiSun onClick={colorChangeHandler} size={30} color="f3AEBE" className="cursor-pointer shadow-lg" />
    ) : (
      <HiMoon onClick={colorChangeHandler} size={30} color="yellow" className="cursor-pointer shadow-lg" />
    )}
  </motion.div>
);

export default ThemeIcon;
