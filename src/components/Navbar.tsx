import React from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signIn, signOut } from '../utils';
const style = {
  navbar: `bg-blue-500 text-white flex justify-between items-center p-4`,
  logo: `text-2xl font-bold cursor-pointer`,
  navItems: `flex gap-4`,
  navItem: `hover:text-blue-300 cursor-pointer`,
  navItemActive: `text-blue-300`,

  button: `bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3`,
};

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  const googleSignIn = async () => {
    const { token, user } = await signIn(() => dispatch({ type: 'user/setUser', payload: user }));
    if (!user) return;

    console.log(token, user);
  };

  const googleSignOut = async () => {
    dispatch({ type: 'user/clearUser' });
    await signOut();
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>dev-ShinMini</div>
      {!user?.displayName ? (
        <button className={style.button} onClick={googleSignIn}>
          SignIn
        </button>
      ) : (
        <ul className={style.navItems}>
          <li className={style.navItem}>Home</li>
          <li className={style.navItem}>About</li>
          <li className={style.navItem}>Contact</li>
          <button className=" border-amber-200 rounded text-gray-300  hover:bg-amber-600" onClick={googleSignOut}>
            SignOut
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
