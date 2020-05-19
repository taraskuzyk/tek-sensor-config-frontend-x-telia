import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import homeSensorv3Reducer from '@features/homeSensorv3/homeSensorv3.js'
import availableSensors from '@features/availableSensors/availableSensors.js'
import industrialSensorReducer from '@features/industrialSensor/industrialSensor'
import agriculturalSensor from '@features/agriculturalSensor/agriculturalSensor'


export default configureStore({
  reducer: {
    // counter: counterReducer,
    availableSensors: availableSensors,
    homeSensorv3: homeSensorv3Reducer,
    industrialSensor: industrialSensorReducer,
    agriculturalSensor: agriculturalSensor,
  },
});
