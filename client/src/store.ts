import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './reducers/user';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };