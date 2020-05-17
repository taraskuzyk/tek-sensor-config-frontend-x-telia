import React, {useMemo, useState, Fragment} from 'react'


import DropDown from '@/elements/DV_dropdown/dropdown'

import PropTypes from 'prop-types'

import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";


const DataVisual = ({sensorData, url}) => {
  
console.log('DV', sensorData, url)
  return (
    <Fragment>
      Lorem ipsum dolor sit amet.
      <DropDown/>
    </Fragment>
  )
}

DataVisual.propTypes = {
}

export default DataVisual