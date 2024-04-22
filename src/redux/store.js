import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './adverts/advartsSlices';
import { favoritesReducer } from './favorites/favoritesSlices';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);