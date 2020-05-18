import React from 'react'
import styled from 'styled-components'

import {Col, Row, Container} from 'shards-react'


import './sensorLayout.scss'

import Navbar from '@elements/navbar/navbar'


const Wrapper = styled.div`
  height: 100%
`



export const SensorLayout = (props) => {

  return (
    <Wrapper >
        <Navbar />
        
            { props.children }
            
        <Container className="mt-5">
          {/* <footer>
            Lorem ipsum dolor sit amet.
          </footer> */}
        </Container>
      
    </Wrapper>
  )

}

export default SensorLayout