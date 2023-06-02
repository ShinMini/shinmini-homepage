import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { useEmulator } from './useEmulator';
type StorageType = ReturnType<typeof getStorage>;

/**
 * Gets a FirebaseStorage instance for the given Firebase app.
 * @param {StorageType} storage
 * @returns {StorageType}
 */
export const useStorage = (storage: StorageType) => {
  if (!storage) {
    storage = getStorage();
    const emulator = useEmulator();
    if (emulator) {
      connectStorageEmulator(storage, 'localhost', 9199);
    }
  }

  return storage;
};
