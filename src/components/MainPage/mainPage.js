import React, {Fragment} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'
import {Col, Row} from 'shards-react'

import {useDispatch, useSelector} from 'react-redux'

import {selectHomeSensor, selectHomeSensorDescription, selectHomeSensorCategories} from '@features/homeSensorv3/homeSensorv3.js'
import allInOne_img from '@/app/img/TEK_HomeSensor.png'

const isDefault = false

const MainPage = () => {

  const selectDescription = useSelector(selectHomeSensorDescription)
  const selectCategories = useSelector(selectHomeSensorCategories)
  const selectHomeSensorState = useSelector(selectHomeSensor)

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
              {selectDescription}
          </p>
          </Col>
            
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