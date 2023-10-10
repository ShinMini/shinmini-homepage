import { useAuthState } from 'react-firebase-hooks/auth';
import AppRouter from './AppRouter';
import { getAuth } from 'firebase/auth';
import { app } from './lib/firebase';

function App() {
  const auth = getAuth(app);
  useAuthState(auth);

  return <AppRouter />;
}

export default App;
