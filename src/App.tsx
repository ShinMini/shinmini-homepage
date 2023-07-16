import { useAuthState } from 'react-firebase-hooks/auth';

import AppRouter from './AppRouter';
import { auth } from './lib/firebase';

function App() {
  console.log('auth', auth);
  useAuthState(auth);

  return <AppRouter />;
}

export default App;
