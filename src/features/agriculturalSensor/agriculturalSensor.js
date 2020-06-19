import React from 'react'

import data from './agriculturalSensor.json'

import _ from 'lodash'

const categories = _.uniqBy(data, function (e) {
    return e["Category description"];
  }).map((el) =>{
    return el["Category description"];
  })

const desc = `The Agriculture Sensor is is the ideal solution to streamline and simplify the
collection of key soil and environmental metrics for crops, residential and
commercial lawns and gardens and golf courses . The device provides a
straightforward and easy to deploy solution for soil moisture and temperature,
air temperature and humidity, and outdoor light monitoring. Enjoy increased
crop yields and decreased operating expenses with the deployment of this
versatile device.`

export const agriculturalSensor ={
    name:'Agricultural Sensor',
    image:'agroSensor.png',
    dropdown: categories,
    description: desc,
    data
}
