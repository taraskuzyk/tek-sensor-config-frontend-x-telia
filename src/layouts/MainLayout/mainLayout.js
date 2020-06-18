import React from 'react'
import styled from 'styled-components'

import {NavLink as RNavLink, Link} from 'react-router-dom'

import {
  Col,
  Row,
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'shards-react'


import './mainLayout.scss'

import Navbar from '@elements/navbar/navbar'


const Wrapper = styled.div`
  height: 100%
`

export const MainLayout = (props) => {

  return (
    <Wrapper >
        <Navbar />
        <Container>
          <Row>
            <Col>
            { props.children }
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 footer" fluid>
        <Col>
        <Container>
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
          </Col>
        </Container>

    </Wrapper>
  )

}

export default MainLayout
