import React, {Fragment} from 'react'
import logo from '../../logo.svg'
import {Counter} from '../../features/counter/Counter'


import Navbar from '@elements/navbar/navbar'
import { Nav } from 'shards-react'

const isDefault = false

const MainPage = () => {

  if (!isDefault) {
    return (
      <Fragment>
        <Navbar/>
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