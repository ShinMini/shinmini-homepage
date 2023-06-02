import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/slices/userSlice';
import { auth } from '../lib/firebase/firebase';

const provider = new GoogleAuthProvider();

export const signIn = () => {
  const dispatch = useAppDispatch();

  return signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      dispatch(setUser(user));
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(token, user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`error code: ${errorCode}, error message: ${errorMessage}`);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(`email error: ${email}, credential error: ${credential}`);
    });
};
