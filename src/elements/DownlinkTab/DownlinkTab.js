import React, {Fragment, useMemo, useState} from 'react'
import {useLocation} from 'react-router-dom'
import DropDown from '../../elements/DV_dropdown/dropdown'
import Table from '../../elements/DownlinkTable/table'
import {Button, Card, CardBody, CardFooter, CardTitle, Col, Container, FormInput, Row} from "shards-react";

const DownlinkTab = ({sensorData, sendDownlink}) => {

  const [port, setPort] = useState("")
  const [base64, setBase64] = useState("")
  const [deveui, setDeveui] = useState("")
  const [stringBytes, setStringBytes] = useState("")

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

  return (
      <Fragment>
        {/*<Container className="mt-4" style={{padding: 20}}>
          {currentTab && <DropDown dropdown={sensorData.dropdown}/>}
        </Container>*/}
        <Container fluid>

          <Row>
            <Col sm={12} lg={12} xs={12}>
              <Card>
                <CardTitle>
                  Encode Hex Payload
                </CardTitle>
                <Row style={{margin: 10}}>
                  <Col sm={12} lg={4} xs={12}>
                    <FormInput placeholder="Enter bytes"
                               value={stringBytes}
                               onChange={(event)=> {setStringBytes(event.target.value)}}
                    />
                  </Col>
                  <Col sm={12} lg={4} xs={12}>
                    <FormInput placeholder="Base64 encoded bytes..."
                               value={base64}
                               onChange={(event)=> {setBase64(event.target.value)}}
                    />
                  </Col>
                  <Col sm={12} lg={4} xs={12}>
                    <FormInput placeholder="Port"
                               value={port}
                               onChange={(event)=> {setPort(event.target.value)}}
                    />
                  </Col>
                </Row>

                <FormInput placeholder="DevEUI"
                           value={deveui}
                           onChange={(event)=> {setDeveui(event.target.value)}}
                           style={{margin: 10}}
                />
                <Button
                    style={{margin: 10}}
                    onClick={()=>{
                      let array = stringBytes.split(" ").map((el)=>parseInt(el, 16))
                      setBase64(ArrayToBase64(array))
                    }}
                >
                  Base64 Encode
                </Button>
                <Button
                    style={{margin: 10}}
                    onClick={()=>{
                      sendDownlink(deveui, port, base64)
                    }}
                >
                  Send
                </Button>

              </Card>
            </Col>
          </Row>

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


function ArrayToBase64(arrayBuffer) {
  let base64 = '';
  const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let a, b, c, d;
  let chunk;

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63;               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '==';
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '=';
  }

  return base64;
}
