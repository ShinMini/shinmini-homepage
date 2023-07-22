import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../themes/GlobalStyle';
import { useAppSelector } from '@src/hooks/useRedux';
import { darkTheme, lightTheme } from '@src/themes/themes';

const StyledProvider = ({ children }: { children: ReactNode }) => {
  const themeType = useAppSelector(state => state.theme.type);
  const theme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
