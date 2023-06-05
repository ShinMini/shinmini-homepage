import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  blacklist: ['firebase'],
  debug: true,
};
