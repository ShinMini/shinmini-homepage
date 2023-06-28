import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hexToRGBA, logout, signInWithGooglePopup } from '@src/features';
import { styled } from 'styled-components';
import { toggleTheme } from '@src/store/slices/themeSlice';

import ThemeIcon from './ThemeIcon';
import firebase from '@lib/firebase';
import { Link } from 'react-router-dom';
import { RoutePath, routeName } from '@src/pages/AppRouter';
import Spacing from '@src/themes/Spacing';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  overflow: hidden;
  box-shadow: 0px 0.3rem 0.3rem 0.1rem ${props => hexToRGBA(props.theme.colors.opposite.background)};
`;

const LogoBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const MenuBox = styled.ul`
  display: flex;
  gap: min(0.6rem, 1.5vw);
  align-items: center;
  @media (max-width: ${Spacing.mobile}) {
    flex-direction: row-reverse;
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: ${Spacing.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};
    background-color: ${props => hexToRGBA(props.theme.colors.background)};
    border-radius: 0.25rem;
    font-size: 1.5rem;
    transition: scale 0.2s ease-in-out;
    scale: 1;
    padding: 0.5rem;
    margin: 0 0.25rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.opposite.text};
      scale: 1.1;
    }
  }
`;

const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(0.8rem, 2vw);
`;

const NavBox = styled.nav<{ isMenuOpen: boolean }>`
  display: flex;
  gap: min(0.8rem, 2vw);
  padding: 0.6rem 1.2rem;

  @media (max-width: ${Spacing.mobile}) {
    flex-direction: column;
    position: absolute;

    border-radius: 5px;
    right: 0.1rem;
    top: 5.5rem;
    background-color: ${props => hexToRGBA(props.theme.colors.yellow, 0.9)};

    transition: all 0.2s ease-in-out;
    transform: ${props => (props.isMenuOpen ? 'translateX(0)' : 'translateX(90%)')};

    &:hover {
      border-radius: 2px;
      padding: 0.6rem 1.4rem;
    }
  }
`;

const NavItem = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.opposite.text};
    text-decoration: underline;
  }
`;

const Logo = styled(Link)`
  font-family: 'PoppinsBold';
  font-size: 2.5rem;
  font-style: italic;
  &:hover {
    color: ${props => props.theme.colors.opposite.text};
  }
`;

const LoginButton = styled.button`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.colors.opposite.background};
    color: ${props => props.theme.colors.opposite.text};
  }
`;

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);
  const user = useAppSelector(state => state.user);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Container>
      <LogoBox>
        <Logo to="/">ShinMini</Logo>
        <ThemeIcon currentColor={currentColor} colorChangeHandler={() => dispatch(toggleTheme())} />
      </LogoBox>
      <MenuBox>
        <DropDownBox>
          <MenuButton onClick={() => setIsMenuOpen(prev => !prev)}>
            <AiOutlineMenu />
          </MenuButton>
          <NavBox isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(prev => !prev)}>
            {routeName.map((value, index) => (
              <NavItem key={`nav-item-${index}-${value}`} to={RoutePath.get(value) || '/'}>
                {value}
              </NavItem>
            ))}
          </NavBox>
        </DropDownBox>
        <LoginButton
          onClick={!user?.displayName ? () => signInWithGooglePopup(dispatch) : () => logout(dispatch, firebase.auth)}>
          {user?.displayName ? user.displayName : 'Log In'}
        </LoginButton>
      </MenuBox>
    </Container>
  );
};

export default Navbar;
