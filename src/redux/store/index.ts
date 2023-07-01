import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import introDoneReducer from '../slices/introDone';
// import rememberMeReducer from '../slices/rememberMe';
// import fcmTokenReducer from '../slices/fcmTokenSlice';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
// import authReducer from '../slice/authSlice';
// import langReducer from '../slice/languageSlice';
import rootSaga from '../sagas/rootSaga';
import authReducer from '../slices/authSlice';
import langReducer from '../slices/languageSlice';
import homeReducer from '../slices/homeSlice';
// import authReducer from '../slices/authSlice';
// import introReducer from '../slices/introSlice';
// import rootSaga from '../sagas/rootSaga';
// import homeReducer from '../slices/homeSlice';
// import langReducer from '../slices/languageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // introDone: introDoneReducer,
  // intro: introReducer,
  // remember: rememberMeReducer,
  // fcmToken: fcmTokenReducer,
  homeReducer,
  language: langReducer,
});
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'auth',
    'introDone',
    'intro',
    'user',
    'token',
    'userReducer',
    'remember',
    'userLogin',
    'fcmToken',
    'language',
    'homeReducer',
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

serializableCheck: false;

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
