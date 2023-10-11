import { app, googleAuthProvider } from '@src/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import signInErrorHandler from './sign-in-error-handler';

export default function googleLogin() {
  const auth = getAuth(app);
  signInWithPopup(auth, googleAuthProvider)
    .then(result => GoogleAuthProvider.credentialFromResult(result))
    .catch(error => alert(signInErrorHandler(error)));
}
