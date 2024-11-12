// store.js
import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './Reudecer/RetailerRegistration';


const store = configureStore({
  reducer: registrationReducer
});

export default store;

