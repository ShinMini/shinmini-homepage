import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../themes/GlobalStyle';
import { useAppSelector } from '@src/hooks/useRedux';

const StyledProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(state => state.theme.themes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
