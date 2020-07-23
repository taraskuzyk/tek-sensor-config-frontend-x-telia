import React, {Fragment, useEffect, useState} from 'react'
import {Button, Card, CardTitle, Col, Container, FormInput, Row} from "shards-react";
import SocketContext from "../../../../SocketContext";

import Base64Binary from "../../../../utils/Base64Binary";

export default function SendBytesMenu(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <SendBytesMenuInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function SendBytesMenuInner({socket, device}) {

    const [port, setPort] = useState("")
    const [base64, setBase64] = useState("")
    const [deveui, setDeveui] = useState("")
    const [stringBytes, setStringBytes] = useState("")

    const handleBase64Change = (base64) => {
        setBase64(base64)
        // setStringBytes(Base64Binary.decode(base64)
        //     .map((el)=> el.toString(16))
        //     //.toString()
        // )
    }

    const handleBytesChange = (stringBytes) => {
        setStringBytes(stringBytes)
        setBase64(Base64Binary.encode( stringBytes.split(" ").map(el=>parseInt(el, 16)) ))//replace the commas with spaces
    }

    useEffect(()=>{
        if (device && device.deviceEUI)
            setDeveui(device.deviceEUI)
    }, [device])

    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={12} xs={12}>
                        <Card style={{padding: 20}}>
                            <CardTitle>
                                Encode Hex Payload
                            </CardTitle>
                            <Row>
                                <Col sm={12} lg={4} xs={12}>
                                    <FormInput placeholder="Enter bytes"
                                               value={stringBytes}
                                               onChange={(event)=> {handleBytesChange(event.target.value)}}
                                    />
                                </Col>
                                <Col sm={12} lg={4} xs={12}>
                                    <FormInput placeholder="Base64 encoded bytes..."
                                               value={base64}
                                               onChange={(event)=> {handleBase64Change(event.target.value)}}
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
                            />

                            {/*<Button
                                style={{margin: 10}}
                                onClick={()=>{
                                    let array = stringBytes.split(" ").map((el)=>parseInt(el, 16))
                                    setBase64(Base64Binary.encode(array))
                                }}
                            >
                                Base64 Encode
                            </Button>*/}

                            <Button
                                disabled = {!device} // I HAVE NO CLUE WHY THE HELL THIS IS TRUE WHEN DEVICE IS NULL
                                // WHAT THE FUCK??
                                onClick={()=>{
                                    socket.emit("downlink", {deveui, port, base64})
                                }}
                            >
                                Send
                            </Button>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
