import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from '@components/Navbar';
import Comment from '@components/Comment';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import firebase from '@lib/firebase';
import { toggleTheme } from './store/slices/themeSlice';
import Layout from './components/Layout';

function App() {
  useAuthState(firebase.auth);
  const user = useAppSelector(state => state.user);
  const currentColor = useAppSelector(state => state.theme.type);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Navbar />
      <h1 className="text-4xl font-bold m-3 from-slate-400 to-slate-700">Hello {user.displayName}!</h1>
      <Comment />
      {currentColor}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </Layout>
  );
}

export default App;
