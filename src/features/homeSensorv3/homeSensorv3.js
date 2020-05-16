import data from '../convertcsv.json'

import { createSlice } from '@reduxjs/toolkit';


export const homeSensorv3Slice = createSlice({
  name: 'homeSensorv3',
  initialState: {},
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

console.log(data)


export const selectHomeSensor = state => state.homeSensorv3;

export default homeSensorv3Slice.reducer;
