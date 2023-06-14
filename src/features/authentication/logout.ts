import { AppDispatch } from '@src/store';
import { clearUser } from '@src/store/slices/userSlice';
import { Auth } from 'firebase/auth';

export default function logout(dispatch: AppDispatch, auth: Auth) {
  auth.signOut();
  dispatch(clearUser());
}
