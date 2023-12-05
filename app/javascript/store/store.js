import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice.js';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;