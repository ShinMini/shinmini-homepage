import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import ThemeIcon from './ThemeIcon';

import { hexToRGBA, logout } from '@src/features';
import { toggleTheme } from '@store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { auth } from '@src/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useOnOutsideClick } from '@hooks/useOnOutSideClick';
import { sp } from '@src/themes';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem 1rem;
  overflow-x: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  color: white;
  background-color: ${props => props.theme.colors.grayDarkest};
`;

const MenuBox = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  gap: clamp(0.5rem, 2vw, 1rem);
  align-items: center;
  @media ${sp.sm} {
    flex-direction: row;
  }
`;

const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(0.8rem, 2vw);
`;

const NavBox = styled.nav<{ $isMenuOpen: boolean }>`
  display: flex;
  gap: min(0.8rem, 2vw);
  z-index: 200;

  & > p {
    display: none;
  }

  @media (max-width: 640px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1.2rem;
    position: fixed;
    & > p {
      display: block;
      padding: 0.2rem 0;
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
    color: ${props => props.theme.colors.grayDark};
    background-color: ${props => hexToRGBA(props.theme.colors.yellow, 0.9)};

    transition: all 0.2s ease-in-out;
    transform: ${props => (props.$isMenuOpen ? 'translateX(10%)' : 'translateX(72%) ')};
  }
`;

const NavItem = styled(Link)`
  font-size: clamp(0.9rem, 2vw, 1.4rem);
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.warning};
    text-decoration: underline;
  }
`;

const LogoBox = styled.div`
  display: flex;
  gap: clamp(0.2rem, 2vw, 0.5rem);
`;

const Logo = styled(Link)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: color 0.2s ease-in-out;
  font-family: ${props => props.theme.fonts.poppins.bold};
  font-weight: 700;
  &:hover {
    color: ${props => props.theme.colors.warning};
  }
`;

const LoginButton = styled.button`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  font-size: clamp(0.8rem, 2vw, 1.2rem);

  padding: 4px 12px;
  border-radius: 0.25rem;
  font-family: ${props => props.theme.fonts.poppins.bold};
  font-weight: 700;
  &:hover {
    background-color: ${props => props.theme.colors.opposite.background};
    color: ${props => props.theme.colors.warning};
  }
`;

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector(state => state.theme.type);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const mobileMenuRef = React.useRef(null);
  const navigate = useNavigate();

  const onClickOutside = () => {
    setIsMenuOpen(false);
  };

  useOnOutsideClick([mobileMenuRef], onClickOutside);

  const handleLogin = () => {
    if (user?.displayName) {
      window.confirm('로그아웃 하시겠습니까?') && logout();
      return;
    } else {
      return navigate('/login');
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
          <NavBox ref={mobileMenuRef} $isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(prev => !prev)}>
            <p>menu</p>
            <div className="flex sm:flex-row sm:gap-4 md:gap-6 flex-col gap-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/memo">Memo</NavItem>
              <NavItem to="/feats">Feat</NavItem>
            </div>
          </NavBox>
        </DropDownBox>
        <LoginButton onClick={handleLogin}>{user?.displayName || 'Log In'}</LoginButton>
      </MenuBox>
    </Container>
  );
};

export default Navbar;
