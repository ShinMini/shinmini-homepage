import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';

import { darkColors, lightColors, themes } from './themes';
import { useAppSelector } from '@src/store/hooks';

export type Theme = 'light' | 'dark';

type Props = {
  children: React.ReactNode;
};

const StyledProvider = ({ children }: Props) => {
  const color = useAppSelector(state => state.theme.theme);

  const colors = color === 'light' ? lightColors : darkColors;
  const theme = { ...themes, colors };

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default StyledProvider;
