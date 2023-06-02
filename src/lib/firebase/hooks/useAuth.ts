import { connectAuthEmulator, getAuth } from 'firebase/auth';

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import { useEmulator } from './useEmulator';

/**
 * Check if the user is logged in.
 * using the firebase @auth object.
 *
 * @param {FirebaseApp} firebaseApp the firebase app.
 *
 * @returns {Auth} true if the user is logged in.
 */
export const useAuth = (firebaseApp: FirebaseApp) => {
  const _auth = getAuth(firebaseApp);
  const emulator = useEmulator();
  if (emulator) {
    connectAuthEmulator(_auth, 'http://localhost:9099');
  }
  return _auth satisfies Auth;
};
