import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReduxProvider, StyledProvider } from '@providers';
import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider>
      <StyledProvider>
        <App />
      </StyledProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
