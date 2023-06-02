import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/index.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);
