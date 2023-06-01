import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { EMULATOR } from '../constants';

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
    if (EMULATOR) {
      connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
  }
  return firestore;
};
