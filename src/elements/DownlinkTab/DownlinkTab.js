import React, {Fragment, useMemo} from 'react'
import {useLocation} from 'react-router-dom'
import DropDown from '../../elements/DV_dropdown/dropdown'
import Table from '../../elements/DownlinkTable/table'
import {Card, CardBody, CardFooter, CardTitle, Col, Container, Row} from "shards-react";

const DownlinkTab = ({sensorData, url}) => {
  const search = useLocation().search;
  const params = new URLSearchParams(search)
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
          {currentTab && <DropDown dropdown={sensorData.dropdown}/>}
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

DownlinkTab.propTypes = {
}

export default DownlinkTab
