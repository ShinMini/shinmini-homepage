import { app, googleAuthProvider } from '@src/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

export default function signInWithGooglePopup() {
  const auth = getAuth(app);
  signInWithPopup(auth, googleAuthProvider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (import.meta.env.MODE === 'development') console.log(token, user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
