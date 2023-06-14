import { useAuthState } from 'react-firebase-hooks/auth';

import Comment from '@components/Comment';

import firebase from '@lib/firebase';
import Layout from './components/Layout';

function App() {
  useAuthState(firebase.auth);

  return (
    <Layout>
      <Comment />
    </Layout>
  );
}

export default App;
