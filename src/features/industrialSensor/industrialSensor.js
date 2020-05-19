import data from './industrialSensor.json'


import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash'

const categories = _.uniqBy(data, function (e) {
    return e["Category description"];
  }).map((el) =>{
    return el["Category description"];
  })
  
  console.log('Industrial sensor categories', categories)
  
const desc = `The KONA Industrial Transceiver and Sensor is an ideal solution for interfacing automation and control
instrumentation to LoRaWAN® networks. The Industrial Transceiver and Sensor supports up to 3 Analog
and Digital inputs enabling remote capture of data, 2 Switched Outputs to activate actuators and different
control system components and a configurable RS-232, RS-422 or RS-485 interface with numerous
protocols. It also measures and reports temperature, humidity, or other custom features.`

export const industrialSensor = createSlice({
    name: 'industrialSensor',
    initialState: {
      name:'TEKTELIC Industrial Sensor',
      image:'industrialTransceiver.png',
      dropdown: categories,
      description: desc,
      data
    },
    reducers: {
  
    }

})


export const selectIndustrialSensor = state => state.industrialSensor;
export const selectIndustrialDescription = state => state.industrialSensor.description
export const selectIndustrialCategories = state => state.industrialSensor.categories

export default industrialSensor.reducer;