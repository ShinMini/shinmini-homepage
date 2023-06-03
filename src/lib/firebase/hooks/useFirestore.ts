import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

import type { FirebaseApp } from 'firebase/app';

/**
 * Returns the existing default Firestore instance that is associated with the default @firebase/app#FirebaseApp.
 * If no instance exists, initializes a new instance with default settings.
 *
 * @param {FireStoreType} firestore a firestore object.
 * @returns {FireStoreType}
 */
export const useFirestore = (firebaseAppInstance: FirebaseApp) => {
  const firestore = getFirestore(firebaseAppInstance);

  if (import.meta.env.VITE_USE_FIRESTORE_EMULATOR) {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
  }

  return firestore;
};
