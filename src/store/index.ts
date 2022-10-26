import { configureStore } from '@reduxjs/toolkit';
import testing from './testing';

const store = configureStore({
  reducer: {
    testing
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;