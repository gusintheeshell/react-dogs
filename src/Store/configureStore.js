import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

const count = () => 0;
const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ count });

const store = configureStore({ reducer, middleware });

export default store;
