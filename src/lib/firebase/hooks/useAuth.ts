import { connectAuthEmulator, getAuth } from 'firebase/auth';

/**
 * Check if the user is logged in.
 * using the firebase @auth object.
 *
 * @param {FirebaseApp} firebaseApp the firebase app.
 *
 * @returns {Auth} true if the user is logged in.
 */
export const useAuth = () => {
  const _auth = getAuth();
  if (import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
    connectAuthEmulator(_auth, 'http://localhost:9099');
  }
  return _auth;
};
