import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import StyledProvider from './themes/StyledProvider.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={<h1>Loading ...</h1>} persistor={persistor}>
        <StyledProvider>
          <App />
        </StyledProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);
