import data from './homeSensorv3.json'

import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash'

const categories = _.uniqBy(data, function (e) {
  return e["Category description"];
}).map((el) =>{
  return el["Category description"];
})

console.log(categories)

const desc = 'The KONA home sensor integrates a lot of useful functionality into a very small form factor. The Home Sensor is ideal for holistically monitoring the home environment, whether it is measuring and reporting temperature, humidity, light, movement, motion, shock or deteting leaks, open/closed doors and windows or other custom features. It also supports battery status for easy maintenance. The sensor is optimized for long battery life and excellent RF performance. It is fully configurable over the air by the user for custom applications, behaviours, thresholds, trigger events and reports, enabling it to support many different Smart Home IoT applications with the same device. The Home Sensor can be cost effectively and quickly modified for other applications and deployments or custom package if required.'

export const homeSensorv3Slice = createSlice({
  name: 'homeSensorv3',
  initialState: {
    name:'TEKTELIC All-in-One Home Sensor v3',
    image:'homeSensorv3.png',
    dropdown: categories,
    description: desc,
    data
  },
  reducers: {

  }
})



export const selectHomeSensor = state => state.homeSensorv3;
export const selectHomeSensorDescription = state => state.homeSensorv3.description
export const selectHomeSensorCategories = state => state.homeSensorv3.categories

export default homeSensorv3Slice.reducer;
