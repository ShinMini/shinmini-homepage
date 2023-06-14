import firebase from '@lib/firebase';
import type { AppDispatch } from '@src/store';
import { setUser } from '@src/store/slices/userSlice';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function signInWithGooglePopup(dispatch: AppDispatch) {
  signInWithPopup(firebase.auth, firebase.provider)
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
