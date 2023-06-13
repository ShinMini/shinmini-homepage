import firebase from '@lib/firebase';
import type { AppDispatch } from '@src/store';
import { setUser } from '@src/store/slices/userSlice';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function signInWithGooglePopup(dispatch: AppDispatch) {
  signInWithPopup(firebase.auth, firebase.provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;

      console.log(`token: ${token}, user: ${user}`);
      dispatch(setUser(user));
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData.email;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
