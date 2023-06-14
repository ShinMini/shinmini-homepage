import { useAuthState } from 'react-firebase-hooks/auth';

import Comment from '@components/Comment';

import firebase from '@lib/firebase';
import Layout from './components/Layout';
import Home from './pages';

function App() {
  useAuthState(firebase.auth);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
