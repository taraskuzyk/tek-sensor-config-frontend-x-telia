import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import homeSensorv3Reducer from '@features/homeSensorv3/homeSensorv3.js'
import availableSensors from '@features/availableSensors/availableSensors.js'


export default configureStore({
  reducer: {
    // counter: counterReducer,
    availableSensors: availableSensors,
    homeSensorv3: homeSensorv3Reducer,
  },
});
