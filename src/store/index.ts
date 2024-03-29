import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { persistConfig } from './persist';
import rootSaga from './saga';

import { themeSlice, memoSlice, toastSlice } from './slices';

export const rootReducer = combineReducers({
  toast: toastSlice,
  theme: themeSlice,
  memo: memoSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      // ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      // },
      sagaMiddleware: true,
    }).concat(sagaMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
