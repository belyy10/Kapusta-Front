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
import { transactionReducer } from './transactions/transactionsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const balancePersistConfig = {
  key: 'balance',
  storage,
  whitelist: ['balance'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    transactions: transactionReducer,
    balance: persistReducer(balancePersistConfig, balanceReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
