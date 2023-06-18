import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout, signInWithGooglePopup } from '@src/features/authentication';
import { styled } from 'styled-components';
import { toggleTheme } from '@src/store/slices/themeSlice';

import ThemeIcon from './ThemeIcon';
import firebase from '@lib/firebase';
import { Link } from 'react-router-dom';
import { RoutePath, routeName } from '@src/pages/AppRouter';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};

  padding: 0.5rem 1rem;

  overflow: hidden;

  box-shadow: 0px 0.3rem 0.3rem 0.1rem ${props => props.theme.colors.shadow};
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 1rem;

  ul {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 1rem;

    list-style: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.opposite.text};

    cursor: pointer;

    text-decoration: underline;

    transition: color 0.2s ease-in-out;

    &:last-child {
      text-decoration: none;

      color: ${props => props.theme.colors.text};

      transition: color 0.2s ease-in-out;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 2.5rem;
  font-weight: bold;

  font-style: italic;

  color: ${props => props.theme.colors.text};

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.opposite.text};
  }
`;

const LoginButton = styled.button`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.info};
  }
`;

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);
  const user = useAppSelector(state => state.user);

  return (
    <NavContainer>
      <div className="flex flex-row gap-3 ">
        <Logo to="/">ShinMini</Logo>
        <ThemeIcon currentColor={currentColor} colorChangeHandler={() => dispatch(toggleTheme())} />
      </div>
      <NavItems>
        <ul>
          {routeName.map((value, index) => (
            <NavItem key={`nav-item-${index}-${value}`} to={RoutePath.get(value) || '/'}>
              {value}
            </NavItem>
          ))}
        </ul>
        {!user?.displayName ? (
          <LoginButton onClick={() => signInWithGooglePopup(dispatch)}>Log In</LoginButton>
        ) : (
          <LoginButton onClick={() => logout(dispatch, firebase.auth)}>Log Out</LoginButton>
        )}
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
