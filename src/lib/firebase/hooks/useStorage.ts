import { connectStorageEmulator, getStorage } from 'firebase/storage';

import type { FirebaseApp } from 'firebase/app';

/**
 * Gets a FirebaseStorage instance for the given Firebase app.
 * Using a storage instance, you can create references, get references, and delete references.
 *
 * @param {FirebaseApp} firebaseAppInstance
 * @returns {FirebaseStorage}
 */
export const useStorage = (firebaseAppInstance: FirebaseApp) => {
  const storage = getStorage(firebaseAppInstance);

  if (import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
    connectStorageEmulator(storage, 'localhost', 9199);
  }

  return storage;
};
