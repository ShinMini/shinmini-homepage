import { connectAuthEmulator, getAuth } from 'firebase/auth';

import type { FirebaseApp } from 'firebase/app';

/**
 * Check if the user is logged in.
 * using the firebase @auth object.
 *
 * @param {FirebaseApp} firebaseApp the firebase app.
 * @returns {Auth} true if the user is logged in.
 */
export const useAuth = (firebaseAppInstance: FirebaseApp) => {
  const auth = getAuth(firebaseAppInstance);

  if (import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return auth;
};
