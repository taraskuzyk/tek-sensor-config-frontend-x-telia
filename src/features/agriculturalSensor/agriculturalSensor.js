import React, {Fragment} from 'react'

import data from './agriculturalSensor.json'

import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash'

const categories = _.uniqBy(data, function (e) {
    return e["Category description"];
  }).map((el) =>{
    return el["Category description"];
  })
  
  console.log('Agricultural sensor categories', categories)


  const desc = `The Agriculture Sensor is is the ideal solution to streamline and simplify the
  collection of key soil and environmental metrics for crops, residential and
  commercial lawns and gardens and golf courses . The device provides a
  straightforward and easy to deploy solution for soil moisture and temperature,
  air temperature and humidity, and outdoor light monitoring. Enjoy increased
  crop yields and decreased operating expenses with the deployment of this
  versatile device.`


  export const agriculturalSensor = createSlice({
    name: 'agriculturalSensor',
    initialState: {
      name:'TEKTELIC Agricultural Sensor',
      image:'agroSensor.png',
      dropdown: categories,
      description: desc,
      data
    },
    reducers: {
  
    }
  })

  
export const selectAgriculturalSensor = state => state.agriculturalSensor;
export const selectAgriculturalDescription = state => state.agriculturalSensor.description
export const selectAgriculturalCategories = state => state.agriculturalSensor.categories

export default agriculturalSensor.reducer;