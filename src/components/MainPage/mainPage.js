import React, {Fragment} from 'react'
import logo from '../../logo.svg'
import { Counter } from '../../features/counter/Counter'

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

import {useDispatch, useSelector} from 'react-redux'

import {
selectAvailableSensors as selAvSensor
} from '@features/availableSensors/availableSensors'

const MainPage = (props) => {
  const selectAvailableSensors = useSelector(selAvSensor)
  console.log(selectAvailableSensors)

  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <h1>TEKTELIC Data Converter</h1>
          <p>Select your device</p>
        </Col>
      </Row>
      <Row className="sensors">
        {
          selectAvailableSensors.map((el, i) => {
            return (
                    <Col sm={6} lg={4} xs={12} className="mt-3" key={i}>
                      <Card>
                        <CardHeader className="smaller">{el.name}</CardHeader>
                        <CardImg src={require(`@/app/img/${el.image}`)} />
                        <CardBody>
                          <CardTitle>{el.name}</CardTitle>
                          <p>{el.description}</p>
                          <Button onClick={(e)=>{
                            e.preventDefault()
                            props.history.push(`/sensor/${el.id}`)
                          }}>Select &rarr;</Button>
                        </CardBody>
                        {el.footer && <CardFooter className="smaller">{el.footer}</CardFooter>}
                      </Card>
                    </Col>
            )
          })
        }
      </Row>
    </Fragment>
  )
}

MainPage.propTypes = {
}

export default MainPage
