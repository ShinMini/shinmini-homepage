import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { useEmulator } from './useEmulator';

type FireStoreType = ReturnType<typeof getFirestore>;

/**
 * Returns the existing default Firestore instance that is associated with the default @firebase/app#FirebaseApp.
 * If no instance exists, initializes a new instance with default settings.
 *
 * @param {FireStoreType} firestore a firestore object.
 * @returns {FireStoreType}
 */
export const useFirestore = (firestore: FireStoreType) => {
  if (!firestore) {
    firestore = getFirestore();
    const emulator = useEmulator();
    if (emulator) {
      connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
  }
  return firestore;
};
