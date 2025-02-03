import { app, googleAuthProvider } from '@src/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import signInErrorHandler from './sign-in-error-handler';

export default function googleLogin() {
  const auth = getAuth(app);
  signInWithPopup(auth, googleAuthProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        window.location.href = '/';
      }
    })
    .catch(error => alert(signInErrorHandler(error)));
}
