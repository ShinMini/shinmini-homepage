import GoogleButton from 'react-google-button';

import { auth } from '../lib/firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth/cordova';

const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const Provider = new GoogleAuthProvider();
  signInWithRedirect(auth, Provider);
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
