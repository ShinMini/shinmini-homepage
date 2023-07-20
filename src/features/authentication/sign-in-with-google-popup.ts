import { provider } from '@src/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

export default function signInWithGooglePopup() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      // if node mode === 'development' then console.log
      if (import.meta.env.MODE === 'development') return console.log(token, user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
