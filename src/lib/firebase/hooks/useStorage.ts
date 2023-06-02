import { connectStorageEmulator, getStorage } from 'firebase/storage';
type StorageType = ReturnType<typeof getStorage>;

/**
 * Gets a FirebaseStorage instance for the given Firebase app.
 * @param {StorageType || undefined} storage
 * @returns {StorageType}
 */
export const useStorage = (storage?: StorageType) => {
  if (!storage) {
    storage = getStorage();
    if (import.meta.env.VITE_USE_FIREBASE_EMULATOR) {
      connectStorageEmulator(storage, 'localhost', 9199);
    }
  }

  return storage;
};
