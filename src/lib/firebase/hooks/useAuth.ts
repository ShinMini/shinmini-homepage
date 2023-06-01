import { getAuth, connectAuthEmulator } from 'firebase/auth';

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';

// import { EMULATOR } from '../constants';

/**
 * Check if the user is logged in.
 * using the firebase @auth object.
 *
 * @param {FirebaseApp} firebaseApp the firebase app.
 *
 * @returns {Auth} true if the user is logged in.
 */
export const useAuth = (firebaseApp: FirebaseApp) => {
  const auth = getAuth(firebaseApp);
  //   if (EMULATOR) {
  //     connectAuthEmulator(auth, 'http://localhost:9099');
  //   }
  return auth satisfies Auth;
};
