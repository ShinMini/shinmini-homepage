import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import rootReducer, { store } from '..';

export const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  whitelist: ['user'],
  debug: true,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistor = persistStore(store);
