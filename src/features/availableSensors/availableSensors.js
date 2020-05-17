import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash'

import sensors from './availableSensors.json'


export const availableSensors = createSlice({
  name: 'availableSensors',
  initialState: sensors,
  reducers: {
  }
})


// ACTIONS

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// THUNK ACTIONS

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


export const selectAvailableSensors = state => state.availableSensors;

export default availableSensors.reducer;
