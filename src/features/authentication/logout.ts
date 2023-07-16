import { getAuth } from 'firebase/auth';

export default function logout() {
  const auth = getAuth();
  auth.signOut();
}
