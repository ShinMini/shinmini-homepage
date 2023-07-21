import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

import ThemeIcon from './ThemeIcon';

import { hexToRGBA, logout, signInWithGooglePopup } from '@src/features';
import Spacing from '@src/themes/Spacing';
import { toggleTheme } from '@store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { RoutePath, routeName } from '@src/AppRouter';
import { auth } from '@src/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  overflow-x: hidden;
  box-shadow: ${props => props.theme.shadows.md};
`;

const LogoBox = styled.div`
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
`;

const MenuBox = styled.ul`
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
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
    scale: 1;
    transition: scale 0.2s ease-in-out;
    padding: 0.6rem;
    margin-left: 0.2rem;
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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1.2rem;
  z-index: 100;

  & > p {
    display: none;
  }

  @media (max-width: ${Spacing.mobile}) {
    position: fixed;
    & > p {
      display: block;
      color: ${props => props.theme.colors.success};
      font-size: 1.2rem;
      margin: 0 0.2rem;
      text-align: center;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
    }

    mix-blend-mode: multiply;
    backdrop-filter: blur(10px);
    border-radius: 5px;
    right: 0;
    top: 4rem;
    background-color: ${props => hexToRGBA(props.theme.colors.yellow, 0.9)};

    transition: all 0.2s ease-in-out;
    transform: ${props => (props.isMenuOpen ? 'translateX(10%)' : 'translateX(72%) ')};
  }
`;

const NavItem = styled(Link)`
  font-size: clamp(0.9rem, 5vw, 1.4rem);
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
  font-size: clamp(1.5rem, 6vw, 2.5rem);
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
  font-size: clamp(0.9rem, 3vw, 1.4rem);

  padding: 0.4rem 0.6rem;
  border-radius: 0.25rem;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.colors.opposite.background};
    color: ${props => props.theme.colors.opposite.text};
  }
`;

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogin = () => {
    if (user?.displayName) {
      window.confirm('로그아웃 하시겠습니까?') && logout();
    } else {
      signInWithGooglePopup();
    }
  };

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
            <p>menu</p>
            <div className="flex sm:flex-row sm:gap-4 md:gap-6 flex-col gap-2">
              {routeName.map((value, index) => (
                <NavItem key={`nav-item-${index}-${value}`} to={RoutePath.get(value) || '/'}>
                  {value}
                </NavItem>
              ))}
            </div>
          </NavBox>
        </DropDownBox>

        <LoginButton onClick={handleLogin}>{user?.displayName || 'Log In'}</LoginButton>
      </MenuBox>
    </Container>
  );
};

export default Navbar;
