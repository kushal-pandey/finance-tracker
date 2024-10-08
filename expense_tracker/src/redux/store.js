import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducer'; // Ensure this is your combined or single reducer

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Correctly configure the store
export let store = configureStore({
  reducer: persistedReducer, // Pass the persisted reducer as a property
});

export let persistor = persistStore(store);
