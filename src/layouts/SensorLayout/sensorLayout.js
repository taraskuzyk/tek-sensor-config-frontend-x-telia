import React from 'react'
import styled from 'styled-components'

import {Col, Row, Container,
Nav,
NavItem,
NavLink
} from 'shards-react'


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
              <Col>
                <Nav className="smaller">
                <NavItem>
                  <span className="active nav-link smaller" style={{'color':'#a29898'}}>2009-2020 TEKTELIC Communications Inc.</span>
                </NavItem>
                <NavItem>
                  <a href="https://tektelic.com" className="active nav-link smaller">Tell us about your LoraWAN use cases.</a>
                </NavItem>
                </Nav>
              </Col>
            </Container>
      
    </Wrapper>
  )

}

export default SensorLayout