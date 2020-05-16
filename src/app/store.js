import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeSensorv3Reducer from '@features/homeSensorv3/homeSensorv3.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
    availableSensors: [],
    homeSensorv3: homeSensorv3Reducer,
  },
});
