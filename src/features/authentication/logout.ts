import { Auth } from 'firebase/auth';

export default function logout(auth: Auth) {
  auth.signOut();
}
