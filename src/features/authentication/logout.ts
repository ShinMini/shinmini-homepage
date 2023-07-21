import { app } from '@src/lib/firebase';
import { getAuth } from 'firebase/auth';

export default function logout() {
  const auth = getAuth(app);
  auth.signOut();
}
