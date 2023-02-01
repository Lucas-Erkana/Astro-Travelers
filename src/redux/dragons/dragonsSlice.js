import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/dragons';

const dragonsList = [];

export const fetchDragons = createAsyncThunk('dragon/fetch', async () => {
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return [];
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: dragonsList,
  reducers: {
    reserveDragon(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReservation(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].id,
          name: element[1].name,
          type: element[1].type,
          flickr_images: element[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export const { reserveDragon, cancelReservation } = dragonSlice.actions;
export default dragonSlice.reducer;
