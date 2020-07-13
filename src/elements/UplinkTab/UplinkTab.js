import React, {Fragment, useMemo, useState, useEffect} from 'react'
import {Card, CardText, CardHeader, Col, Container, Row, Button } from "shards-react";
import ItemList from "../ItemList/ItemList";
import _ from 'lodash'
import SocketContext from "../../SocketContext";
import {timestampToString} from "../../utils/timeConversions";
import MenuCol from "../MenuCol/MenuCol";

export default function UplinkTab({messages, devices, socket, isSocketSet}){

    /*const [devices, setDevices] = useState({})*/

    //const displays = ["network", "payload", "mac"]
    const [displayIndex, setDisplayIndex] = useState(0)
    //const devices = _.uniq(messages.map((msg)=>msg.raw.payloadMetaData.deviceMetaData.deviceEUI))
    const [applications, setApplications] = useState([])
    const [activeApplication, setActiveApplication] = useState()
    const [activeDevice, setActiveDevice] = useState()
    const [activeTimestamp, setActiveTimestamp] = useState()
    const [displayNetwork, setDisplayNetwork] = useState("")
    const [displayPayload, setDisplayPayload] = useState("")

    const handleApplicationClick = (application) => {
        setActiveApplication(application)
    }

    const handleTimestampChange = (message) => {
        setActiveTimestamp(message.raw.serverTimestamp)
        setDisplayNetwork(
            JSON.stringify(
                message.raw,
                null,
                2
            )
        )
        setDisplayPayload(
            JSON.stringify(
                message.decoded,
                null,
                2
            )
        )
    }

    useEffect(()=>{
        console.log(socket)
        console.log(isSocketSet)
        if (isSocketSet){
            socket.on("userApplications", (applications) => {
                console.log("LOLOLOL")
                setApplications(applications)
            })
        }
    }, [socket])

    useEffect(()=>{
        if ((activeDevice === undefined || activeDevice === null) && messages.length > 0){
            setActiveDevice(devices[0])
            handleTimestampChange(messages[0])
        }
    }, [messages])

    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <MenuCol
                        lg={3}
                        header="Applications"
                        items={applications}
                        onItemClick={handleApplicationClick}
                        getItemLabel={(item)=> item.name}
                    />

                    <MenuCol
                        lg={2}
                        header={"Device EUI"}
                        items={devices}
                        //onClick={handleDeviceClick}
                        getItemLabel={(item=> item)}
                    />

                    <MenuCol
                        lg={2}
                        header={"Date"}
                        items={_.filter(messages, (msg)=> {
                            return msg.raw.payloadMetaData.deviceMetaData.deviceEUI === activeDevice ? activeDevice : devices[0]
                        })}
                        onClick={handleTimestampChange}
                        getItemLabel={(item)=> {
                            timestampToString(item.raw.serverTimestamp)
                        }}
                    />

                    <Col sm={12} lg={4} xs={12}>
                        <Card>
                            <CardHeader>
                                <Button onClick={()=> setDisplayIndex(0)}
                                        active={displayIndex===0}
                                >
                                    Network Layer
                                </Button>
                                <Button
                                    onClick={()=> setDisplayIndex(1)}
                                    active={displayIndex===1}
                                >
                                    Decoded Payload
                                </Button>
                            </CardHeader>
                            <CardText>
                                <pre>
                                    {displayIndex === 0 ?
                                        displayNetwork :
                                        displayIndex === 1 ?
                                            displayPayload :
                                            null
                                    }
                                </pre>
                            </CardText>
                        </Card>
                    </Col>

                </Row>
                <Row>

                </Row>
            </Container>

        </Fragment>
    )
}

