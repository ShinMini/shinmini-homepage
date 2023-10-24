import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { themes, globalStyle as GlobalStyle } from '@themes';
import { useAppSelector } from '@hooks/useRedux';

const StyledProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(state => state.theme.type);

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
