import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  whitelist: ['theme', 'todo'],
  debug: true,
};
