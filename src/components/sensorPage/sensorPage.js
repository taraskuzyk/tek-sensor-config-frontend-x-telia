import React, {Fragment, useEffect, useMemo} from 'react'
import {
  Container,
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
} from 'shards-react'

import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {
  selectAvailableSensors as selAvSensor,
  selectAllState as state
} from '@features/availableSensors/availableSensors.js'

import DataVisual from '@/elements/dataVisual/dataVisual.js'

const SensorPage = (props) => {

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
        <Container>
        <Row className="mb-4" style = {{'margin' : '0 -15px 20px -15px'}}>
          <Col>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{sensor_data.name}</BreadcrumbItem>
          </Breadcrumb>
          </Col>
        </Row>


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
        </Container>
        <DataVisual sensorData={sensor_data} url={props.match} />
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <p>Sensor not found!</p>
              <Link to="/">Back</Link>
            </Col>
          </Row>
        </Container>

      </Fragment>
    )
  }

  }

SensorPage.propTypes = {
}

export default SensorPage
