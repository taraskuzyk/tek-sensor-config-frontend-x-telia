import React, {Fragment, useEffect, useState} from 'react'
import io from 'socket.io-client'

import {
    Col, Container, Row, FormInput, Button,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'shards-react'

import DownlinkTab from '../../elements/DownlinkTab/DownlinkTab.js'
import UplinkTab from "../../elements/UplinkTab/UplinkTab";

import { homeSensor } from '../../features/homeSensor/homeSensor.js'
import { bookingTablet } from '../../features/bookingTablet/bookingTablet.js'
import { agriculturalSensor } from '../../features/agriculturalSensor/agriculturalSensor.js'
import { industrialSensor } from '../../features/industrialSensor/industrialSensor.js'
import { industrialTracker } from '../../features/industrialTracker/industrialTracker.js'

const sensors = {};
sensors['homeSensorv3'] = homeSensor;
sensors['bookingTablet'] = bookingTablet;
sensors['agriculturalSensor'] = agriculturalSensor;
sensors['industrialSensor'] = industrialSensor;
sensors['industrialTracker'] = industrialTracker;

export default function SensorPage(props) {

    const [username, setUsername] = useState("taras")
    const [password, setPassword] = useState("test")
    const [server, setServer] = useState("https://lorawan-ns-na.tektelic.com/")
    const [socket, setSocket] = useState(null)
    const [isSocketSet, setIsSocketSet] = useState(false)
    const [isMQTTConnected, setIsMQTTConnected] = useState(false)
    const [sensorData, setSensorData] = useState(sensors['homeSensorv3'])
    const [sensorSelect, setSensorSelect] = useState(false)
    const [downlinkTab, setDownlinkTab] = useState(false)
    const [messages, setMessages] = useState([])

    function updateSensorData(newSensorData){
        setSensorData(newSensorData)
    }

    function mqttConnect(){
        if (isSocketSet) {
            console.log("ASD!!!")
            socket.emit("mqttConnect", {
                username: username,
                password: password,
                server: server,
                sensor: sensorData.name,
            })
        }
    }

    useEffect(()=> {
        console.log(messages);
    }, [messages])

    useEffect(()=> {
        setSocket(io("http://localhost:13337"))
    }, []);

    useEffect(()=>{
        if (socket !== null && !isSocketSet ) {
            console.log("socket connected")

            socket.on("mqttMessage", (msg) => { //msg: {raw, decoded}
                console.log("inside mqttMessage: ")
                console.log(messages)
                let newMessages

                console.log(newMessages)
                setMessages(messages => messages.concat(msg))
            })

            socket.on("mqttConnected", ()=>{
                setIsMQTTConnected(true);
            })

            setIsSocketSet(true);
        }
    }, [socket])

    return (
        <Fragment>
            <Row style={{margin: 20}}>
                <Col sm={12} lg={2} xs={12}>
                    <Dropdown open={sensorSelect} toggle={()=>setSensorSelect(!sensorSelect)} >
                        <DropdownToggle style = {{width: "100%"}}>{sensorData.name}</DropdownToggle>
                        <DropdownMenu>
                            {Object.values(sensors).map((el, i)=>{
                                return (
                                    <DropdownItem onClick={()=>setSensorData(sensors[el.id])}>
                                        {el.name}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col sm={12} lg={1} xs={12}>
                    <Button onClick={()=>setDownlinkTab(!downlinkTab)}>{downlinkTab ? 'Downlinks' : 'Uplinks'}</Button>
                </Col>
                <Col sm={12} lg={2} xs={12}>
                    <FormInput placeholder="Username" value={username} onChange={(event)=> {setUsername(event.target.value)}}/>
                </Col>
                <Col sm={12} lg={2} xs={12}>
                    <FormInput placeholder="Password" value={password} onChange={(event)=> {setPassword(event.target.value)}}/>
                </Col>
                <Col sm={12} lg={3} xs={12}>
                    <FormInput placeholder="NS URL e.g. https://lorawan-ns-na.tektelic.com/" value={server} onChange={(event)=> {setServer(event.target.value)}}/>
                </Col>
                <Col sm={12} lg={1} xs={12}>
                    <Button onClick={()=>mqttConnect()}>Connect</Button>
                </Col>
                <Col sm={12} lg={1} xs={12}>
                    <div style={{color: isMQTTConnected ? 'green' : 'red'}}>{isMQTTConnected ? 'Connected' : 'No MQTT connection'}</div>
                </Col>
            </Row>
        </Fragment>
    )


}
