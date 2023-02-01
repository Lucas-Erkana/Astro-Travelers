import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/mission';
import rocketSlice from './rockets/rocketSlice';
import dragonSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    dragons: dragonSlice,
    missions: missionReducer,

  },
});
export default store;
