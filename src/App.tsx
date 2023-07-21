import { useAuthState } from 'react-firebase-hooks/auth';
import AppRouter from './AppRouter';
import { getAuth } from 'firebase/auth';
import { app } from './lib/firebase';

function App() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  user?.displayName && console.log(`Hello ${user?.displayName}!`);

  return <AppRouter />;
}

export default App;
