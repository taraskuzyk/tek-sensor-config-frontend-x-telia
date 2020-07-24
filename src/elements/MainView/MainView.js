import React, {Fragment, useState, useEffect} from 'react'
import {Card, CardHeader, Col, Container, Row, Button, CardBody} from "shards-react";
import _ from 'lodash'
import SocketContext from "../../SocketContext";
import MenuCol from "../MenuCol/MenuCol";
import UplinkTab from "./UplinkTab/UplinkTab";
import DownlinkTab from "./DownlinkTab/DownlinkTab";

export default function MainView(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <MainViewInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function MainViewInner({socket, sensorData}){
    if (socket) {

    }
    const [applications, setApplications] = useState([])
    const [activeApplication, setActiveApplication] = useState()

    const [devices, setDevices] = useState({})
    const [activeDevice, setActiveDevice] = useState()

    const [messages, setMessages] = useState([])
    const [isDownlinkSelected, setIsDownlinkSelected] = useState(false)

    const [displayIndex, setDisplayIndex] = useState(0)

    const handleApplicationChange = (application) => {
        setActiveApplication(application)
        console.log(application.id.id)
        socket.emit("openApplication", application.id.id)
    }

    const handleDeviceChange = (device) => {
        setActiveDevice(device)
        console.log(device)
        socket.emit("openDevice", device)
    }

    useEffect(()=>{
        socket
        .on("userApplications", (applications) => {
            console.log(applications)
            setApplications(applications)
            handleApplicationChange(applications ? applications[0]: null)
        })
        .on("applicationDevices", (devices) => {
            console.log(devices)
            setDevices(devices)
            handleDeviceChange(devices ? devices[0] : null)
        })
        .on("allDeviceMessages", (messages) => {
            console.log(messages)
            setMessages(oldMessages => _.reverse(messages))
        })
        .on("newDeviceMessage", (message) => {
            console.log(message)
            setMessages(oldMessages => [message, ...oldMessages])
        })
    }, [socket])

    return (
        <Fragment>
            <div>
                <Container fluid>
                    <Row>
                        <MenuCol
                            lg={2}
                            header="Applications"
                            items={applications}
                            onClick={handleApplicationChange}
                            getItemLabel={(item) => item.name}
                        />

                        <MenuCol
                            lg={2}
                            header={"Devices"}
                            items={devices}
                            onClick={handleDeviceChange}
                            getItemLabel={(item) => item.name}
                        />

                        <Col sm={12} lg={8} xs={12}>
                            <Card>
                                <CardHeader>
                                    <Button
                                        theme="info"
                                        onClick={()=>setIsDownlinkSelected(!isDownlinkSelected)}
                                    >
                                        {isDownlinkSelected ? 'Downlinks' : 'Uplinks'}
                                    </Button>
                                    <Button
                                        style = {{display: !isDownlinkSelected ? "inline-block" : "none", marginLeft: 20}}
                                        onClick={()=> setDisplayIndex(0)}
                                        active={displayIndex===0}
                                    >
                                        Network Server
                                    </Button>
                                    <Button
                                        style = {{display: !isDownlinkSelected ? "inline-block" : "none", marginLeft: 20 }}
                                        onClick={()=> setDisplayIndex(1)}
                                        active={displayIndex===1}
                                    >
                                        App
                                    </Button>
                                    <Button
                                        style = {{display: !isDownlinkSelected ? "inline-block" : "none", marginLeft: 20 }}
                                        onClick={()=> setDisplayIndex(2)}
                                        active={displayIndex===2}
                                    >
                                        LoRaMAC
                                    </Button>
                                </CardHeader>
                                <CardBody>
                                    <UplinkTab
                                        display = {!isDownlinkSelected ? "flex" : "none" }
                                        messages = {messages}
                                        displayIndex = {displayIndex}
                                    />
                                    <DownlinkTab
                                        display = {isDownlinkSelected ? "block" : "none" }
                                        sensorData = {sensorData.downlink ? sensorData.downlink : {}}
                                        device = {activeDevice}
                                    />

                                    {/*make this stuff more readable. Replace displayIndex with display?*/}
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
