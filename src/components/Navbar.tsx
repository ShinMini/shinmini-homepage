import React from 'react';

import { auth } from '../lib/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from '../pages/SignIn';

const style = {
  navbar: `bg-blue-500 text-white flex justify-between items-center p-4`,
  logo: `text-2xl font-bold cursor-pointer`,
  navItems: `flex gap-4`,
  navItem: `hover:text-blue-300 cursor-pointer`,
  navItemActive: `text-blue-300`,
};

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Logo</div>
      <SignIn />
      <ul className={style.navItems}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>About</li>
        <li className={style.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
