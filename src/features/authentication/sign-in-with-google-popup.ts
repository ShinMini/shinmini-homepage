import type { AppDispatch } from '@src/store';
import { setUser } from '@src/store/slices/userSlice';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '@lib/firebase/firebase';

export default function signInWithGooglePopup(dispatch: AppDispatch) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.dir(`token: ${token}, user: ${user}`);
      dispatch(setUser(user));
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
