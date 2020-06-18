import data from './bookingTablet.json'


import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash'

const categories = _.uniqBy(data, function (e) {
    return e["Category description"];
  }).map((el) =>{
    return el["Category description"];
  })
  
  console.log('Meeting Room Booking Tablet', categories)
  
const desc = `The Industrial GPS Asset Tracker is an ideal solution for geolocalizing your assets in the field. This device provides
GPS enabled near real-time satellite location tracking with LoRaWAN®. The rugged IP67 design allows for operation
in diverse deployment environments, with an operable temperature range of -40°C to +85°C and an optional BLE
integration. The device contains 2x D Cell batteries for optimal battery life of up to 8-10 years. The unit is equipped
with an accelerometer to accommodate event-based start-up, minimizing unnecessary battery usage.`

export const bookingPlatform = createSlice({
    name: 'bookingPlatform',
    initialState: {
      name:'TEKTELIC Meeting Room Booking Tablet',
      image:'bookingPlatform.png',
      dropdown: categories,
      description: desc,
      data
    },
    reducers: {
  
    }

})


export const selectBookingPlatform = state => state.bookingPlatform;
export const selectBookingPlatformDescription = state => state.bookingPlatform.description
export const selectBookingPlatformCategories = state => state.bookingPlatform.categories

export default bookingPlatform.reducer;