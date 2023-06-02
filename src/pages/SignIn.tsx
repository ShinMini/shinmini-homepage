import GoogleButton from 'react-google-button';
import { signIn } from '../utils/signIn';

const style = {
  wrapper: `flex justify-center`,
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={signIn} />
    </div>
  );
};

export default SignIn;
