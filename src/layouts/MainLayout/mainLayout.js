import React from 'react'
import styled from 'styled-components'

import {Col, Row, Container} from 'shards-react'


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
      
    </Wrapper>
  )

}

export default MainLayout