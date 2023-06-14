import React from 'react';

import { HiSun, HiMoon } from 'react-icons/hi';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signInWithGooglePopup } from '@src/utils';
import { styled } from 'styled-components';
import { toggleTheme } from '@src/store/slices/themeSlice';

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;

  color: ${props => props.theme.colors.text};

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.oppositeText};
  }
`;

const LoginButton = styled.button`
  background-color: ${props => props.theme.colors.oppositeBackground};
  color: ${props => props.theme.colors.oppositeText};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  font-size: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.oppositeText};
    color: ${props => props.theme.colors.oppositeText};
  }
`;

const style = {
  navbar: `bg-blue-500 text-white flex justify-between items-center px-8 py-4 box-border`,
  navItems: `flex gap-4`,
  navItem: `hover:text-blue-300 cursor-pointer`,
  navItemActive: `text-blue-300`,
};

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);

  const user = useAppSelector(state => state.user);

  const colorChangeHandler = () => dispatch(toggleTheme());

  const googleSignIn = async () => {
    console.log('called googleSignIn');
    signInWithGooglePopup(dispatch);
    return;
  };

  const googleSignOut = async () => {
    dispatch({ type: 'user/clearUser' });
  };

  return (
    <nav className={style.navbar}>
      <Logo>ShinMini</Logo>
      <div className="flex flex-row gap-4 align-middle">
        {currentColor === 'light' ? (
          <HiMoon onClick={colorChangeHandler} size={30} color="yellow" className="cursor-pointer shadow-lg" />
        ) : (
          <HiSun onClick={colorChangeHandler} size={30} color="f3AEBE" className="cursor-pointer shadow-lg" />
        )}
        {!user?.displayName ? (
          <LoginButton onClick={googleSignIn}>Log In</LoginButton>
        ) : (
          <ul className={style.navItems}>
            <li className={style.navItem}>Home</li>
            <li className={style.navItem}>About</li>
            <li className={style.navItem}>Contact</li>
            <LoginButton onClick={googleSignOut}>Log Out</LoginButton>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
