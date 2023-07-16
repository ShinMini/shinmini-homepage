import { signInWithPopup, GoogleAuthProvider, Auth } from 'firebase/auth';

export default function signInWithGooglePopup(auth: Auth, provider: GoogleAuthProvider) {
  signInWithPopup(auth, provider)
    // .then(result => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    // const user = result.user;
    // })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(errorCode, errorMessage, email, credential);
    });
}
