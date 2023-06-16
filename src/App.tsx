import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from '@lib/firebase';
import AppRouter from './pages/AppRouter';

function App() {
  useAuthState(firebase.auth);

  return <AppRouter />;
}

export default App;
