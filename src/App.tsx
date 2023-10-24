import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from './lib/firebase';
import { Outlet } from 'react-router-dom';

function App() {
  const auth = getAuth(app);
  useAuthState(auth);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
