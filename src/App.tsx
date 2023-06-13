import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from '@components/Navbar';
import Comment from '@components/Comment';

import { useAppSelector } from '@store/hooks';
import firebase from '@lib/firebase';

function App() {
  useAuthState(firebase.auth);
  const user = useAppSelector(state => state.user);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />
      <h1 className="text-4xl font-bold m-3 from-slate-400 to-slate-700">Hello {user.displayName}!</h1>
      <Comment />
    </div>
  );
}

export default App;
