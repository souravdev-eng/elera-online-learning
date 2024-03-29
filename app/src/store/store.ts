import {combineReducers, configureStore} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './reducers/user.reducer';
import creatorReducer from './reducers/creator.reducer';
import courseReducer from './reducers/course.reducer';
import orderReducers from './reducers/order.reducers';
import chatReducer from './reducers/chat.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'chat'],
};

const rootReducer = combineReducers({
  user: userReducer,
  creator: creatorReducer,
  course: courseReducer,
  order: orderReducers,
  chat: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
