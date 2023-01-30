import { configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,

  },
});
export default store;
