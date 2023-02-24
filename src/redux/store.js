import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { balanceReducer } from './balance';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: { auth: persistReducer(persistConfig, authReducer), balance: balanceReducer,},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
