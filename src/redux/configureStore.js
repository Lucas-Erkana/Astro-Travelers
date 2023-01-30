import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/mission';
import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionReducer,

  },
});
export default store;
