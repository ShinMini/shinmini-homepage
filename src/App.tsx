import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from '@lib/firebase';
import Layout from './components/Layout';
import AppRouter from './AppRouter';

function App() {
  useAuthState(firebase.auth);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
