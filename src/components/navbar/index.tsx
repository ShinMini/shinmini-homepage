import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { getAuth } from 'firebase/auth';
import { AiOutlineMenu } from 'react-icons/ai';

import ThemeIcon from './ThemeIcon';

import { hexToRGBA, logout, signInWithGooglePopup } from '@src/features';
import Spacing from '@src/themes/Spacing';
import { toggleTheme } from '@store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { RoutePath, routeName } from '@src/AppRouter';
import { app } from '@src/lib/firebase';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
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
    position: fixed;

    border-radius: 5px;
    right: 0.1rem;
    top: 5.5rem;
    background-color: ${props => hexToRGBA(props.theme.colors.yellow, 0.9)};

    transition: all 0.2s ease-in-out;
    transform: ${props => (props.isMenuOpen ? 'translateX(0) rotateZ(0deg)' : 'translateX(80%) rotateZ(-5deg)')};

    &:hover {
      border-radius: 2px;
      padding: 0.6rem 1.4rem;
      transform: ${props => (props.isMenuOpen ? 'translateX(-5%)' : 'translateX(75%)')} scale(1.1);
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
  text-shadow: ${props => props.theme.shadows.xl};
  transition: color 0.2s ease-in-out;
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
  const auth = getAuth(app);
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Container>
      <LogoBox>
        <Logo to="/">ShinMini</Logo>
        <div onClick={() => dispatch(toggleTheme())} className="cursor-pointer">
          <ThemeIcon currentColor={currentColor} />
        </div>
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

        {auth.currentUser?.displayName ? (
          <LoginButton onClick={logout}>Log Out</LoginButton>
        ) : (
          <LoginButton onClick={signInWithGooglePopup}>Log In</LoginButton>
        )}
      </MenuBox>
    </Container>
  );
};

export default Navbar;
