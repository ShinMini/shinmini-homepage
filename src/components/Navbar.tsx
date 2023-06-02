import React from 'react';

import SignIn from '../pages/SignIn';
import { useAppSelector } from '../store/hooks';

const style = {
  navbar: `bg-blue-500 text-white flex justify-between items-center p-4`,
  logo: `text-2xl font-bold cursor-pointer`,
  navItems: `flex gap-4`,
  navItem: `hover:text-blue-300 cursor-pointer`,
  navItemActive: `text-blue-300`,
};

const Navbar: React.FC = () => {
  const user = useAppSelector(state => state.user);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>dev-ShinMini</div>
      {!user?.displayName ? (
        <SignIn />
      ) : (
        <ul className={style.navItems}>
          <li className={style.navItem}>{user.displayName}</li>
          <li className={style.navItem}>Home</li>
          <li className={style.navItem}>About</li>
          <li className={style.navItem}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
