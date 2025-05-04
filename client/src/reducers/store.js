import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// import thunk from 'redux-thunk';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // NO NEED FOR THIS IF YOU ARE USING RTK (REDUX TOOLKIT). IT IS ADDED AUTOMATICALLY
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
