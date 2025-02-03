import { app, githubAuthProvider } from '@src/lib/firebase';
import { signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth';
import signInErrorHandler from './sign-in-error-handler';

export default function githubLogin() {
  const auth = getAuth(app);
  signInWithPopup(auth, githubAuthProvider)
  .then(result => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      window.location.href = '/';
    }
    }).catch(error => alert(signInErrorHandler(error)));
}
