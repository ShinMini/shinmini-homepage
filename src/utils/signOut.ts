import { auth } from '../lib/firebase/firebase';

export async function signOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
}
