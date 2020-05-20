import { createSlice } from '@reduxjs/toolkit';
import sensors from './availableSensors.json'

export const availableSensors = createSlice({
  name: 'availableSensors',
  initialState: sensors,
  reducers: {
  }
})


export const selectAvailableSensors = state => state.availableSensors;
export const selectAllState = state => state

export default availableSensors.reducer;
