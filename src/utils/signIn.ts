import auth from '@lib/firebase';

import { FirebaseError } from 'firebase/app';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export async function signIn(callback: () => void) {
  let token = undefined;
  let user = undefined;
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    token = credential?.accessToken;
    user = result.user;

    callback();
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`error code: ${errorCode}, error message: ${errorMessage}`);

      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(`email error: ${email}, credential error: ${credential}`);
    }
  }
  return { token, user };
}
