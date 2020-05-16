import React, {Fragment} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'
import {Col, Row} from 'shards-react'

import {useSelector} from 'react-redux'

import {
  selectHomeSensor,
  selectHomeSensorDescription,
  selectHomeSensorCategories
} from '@features/homeSensorv3/homeSensorv3.js'

import allInOne_img from '@/app/img/TEK_HomeSensor.png'

const isDefault = false



const SensorPage = (props) => {

  const selectDescription = useSelector(selectHomeSensorDescription)
  const selectCategories = useSelector(selectHomeSensorCategories)
  const selectHomeSensorState = useSelector(selectHomeSensor)
  
  console.log('8878', props.match.params) // parameter in the URL
    

  if (!isDefault) {
    return (
      <Fragment>
        <Row>
          <Col sm={12}>
            <h1>Home Sensor</h1>
          </Col>
          <Col lg={{size: 2, offset: 0}} sm={{size: 6, offset: 2}}>
          <img src={allInOne_img} alt="" className="img-thumbnail"/>
          </Col>
          <Col sm={12} lg={10}>
          <p className="smaller">
              {123}
          </p>
          </Col>
            
        </Row>
       
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>

      </Fragment>
    )
  }

  }

SensorPage.propTypes = {
}

export default SensorPage