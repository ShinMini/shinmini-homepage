import { app, githubAuthProvider } from '@src/lib/firebase';
import { signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth';

export default function githubLogin() {
  const auth = getAuth(app);
  signInWithPopup(auth, githubAuthProvider)
    .then(result => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (import.meta.env.MODE === 'development') console.log(token, user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
