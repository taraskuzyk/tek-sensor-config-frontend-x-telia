import React, {useMemo, useState, Fragment} from 'react'
import {useLocation} from 'react-router-dom'


import DropDown from '@/elements/DV_dropdown/dropdown'
import Table from '@/elements/DV_table/table'

import PropTypes from 'prop-types'

import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";


const DataVisual = ({sensorData, url}) => {


  const search = useLocation().search;
  const params = new URLSearchParams(search) 
  
  console.log(params.get('category'));
   

  const currentTab = useMemo(() => {
    if(!params.has('category'))
    {
      return 'All Categories'
    }

    if (params.has('category') && (sensorData.dropdown.includes(params.get('category')))) {
      return params.get('category')
    }
    else {
      return null
    }

  }, [params, sensorData.dropdown])
  
  console.log('currentTab:', currentTab)


  
console.log('DV', sensorData, url)

  if (!currentTab) {
   return (
     <Fragment>
       <Container>
         <Row>
           <Col>
            Sorry, sensor doesn't have this category.
           </Col>
         </Row>
       </Container>
     </Fragment>
   ) 
  }
  return (
    <Fragment>
      <Container className="mt-4">
        <Row>
          <Col lg={9}>
          <span className="text-uppercase page-subtitle">Category</span>
          <h2>
            {currentTab}
          </h2>
          Lorem ipsum dolor sit amet.
          </Col>
          <Col lg={3}>
          {currentTab && <DropDown dropdown={sensorData.dropdown}/>}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12} xs={12} className="mt-4">
            <Card>
              <CardBody>
              <CardTitle>{currentTab}</CardTitle>
                <Table sensorData={sensorData} params={params} />
              </CardBody>
              <CardFooter className="smaller">A payload should be sent on 100 port.</CardFooter>
              
            </Card>
          </Col>
        </Row>
      </Container>
      
    </Fragment>
  )
}

DataVisual.propTypes = {
}

export default DataVisual