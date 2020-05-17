import React, {Fragment} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'

import PropTypes from 'prop-types'

import {
  Col,
  Row,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import {useDispatch, useSelector} from 'react-redux'

import {
  selectHomeSensor, 
  selectHomeSensorDescription, 
  selectHomeSensorCategories
} from '@features/homeSensorv3/homeSensorv3.js'
import {
selectAvailableSensors as selAvSensor
} from '@features/availableSensors/availableSensors'

import allInOne_img from '@/app/img/TEK_HomeSensor.png'

const isDefault = false

const MainPage = (props) => {

  const selectDescription = useSelector(selectHomeSensorDescription)
  const selectCategories = useSelector(selectHomeSensorCategories)
  const selectHomeSensorState = useSelector(selectHomeSensor)
  const selectAvailableSensors = useSelector(selAvSensor)

  console.log(selectAvailableSensors)

  if (!isDefault) {
    return (
      <Fragment>
        <Row>
          <Col sm={12}>
            <h1>Tektelic Data Converter Tool</h1>
            <p>Select type of your device</p>
          </Col>
          {
            selectAvailableSensors.map((el) => {
              return (
                      <Col sm={6} lg={4} xs={12} className="mt-3">
                        <Card>
                          <CardHeader>{el.name}</CardHeader>
                          <CardImg src="https://place-hold.it/300x200" />
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
  else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    )
  }

  }

MainPage.propTypes = {
}

export default MainPage