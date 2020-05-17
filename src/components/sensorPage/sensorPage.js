import React, {Fragment, useEffect, useMemo} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'
import {Col, Row} from 'shards-react'

import {useSelector} from 'react-redux'

import {
  selectHomeSensor,
  selectHomeSensorDescription,
  selectHomeSensorCategories,
  sensorSelector,
  selectAllState as state,
} from '@features/homeSensorv3/homeSensorv3.js'

import {
  selectAvailableSensors as selAvSensor
} from '@features/availableSensors/availableSensors.js'

import DataVisual from '@/elements/dataVisual/dataVisual.js'

const SensorPage = (props) => {

  const selectDescription = useSelector(selectHomeSensorDescription)
  const selectCategories = useSelector(selectHomeSensorCategories)
  const selectHomeSensorState = useSelector(selectHomeSensor)
  const selectAvailableSensors = useSelector(selAvSensor)
  const selectAllState = useSelector(state)

  const sensor_data = useMemo(()=> {
    if (props.match.params.id in selectAllState) {
      console.log('ID найден')
      return selectAllState[props.match.params.id]
    }
    else {
      console.log('ID не найден')
      return null
  
    }
    
  }, [props.match.params.id, selectAllState])

  console.log('URL params', props.match.params) // parameter in the URL
  console.log('matched sensor data', sensor_data)

  useEffect(()=>{
    console.log('useEffect sensorPage')
  }, [props.match.params.id, selectAvailableSensors])


  if (sensor_data) {
    return (
      <Fragment>
        <Row>
          <Col sm={12} className="mb-2">
            <h2>{sensor_data.name}</h2>
          </Col>
          <Col lg={{size: 2, offset: 0}} sm={{size: 6, offset: 2}}>
          <img src={require(`@/app/img/${sensor_data.image}`)} alt="" className="img-thumbnail"/>
          </Col>
          <Col sm={12} lg={10}>
          <p className="smaller">
              {sensor_data.description}
          </p>
          </Col>
        </Row>
        <DataVisual sensorData={sensor_data} url={props.match} />
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>
        <p>Sensor not found!</p>
      </Fragment>
    )
  }

  }

SensorPage.propTypes = {
}

export default SensorPage