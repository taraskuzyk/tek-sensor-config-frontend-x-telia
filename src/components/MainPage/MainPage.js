import React, {Fragment, useEffect, useState} from 'react'
import SocketContext from "../../SocketContext";
import {
    Col, Row, FormInput, Button,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'shards-react'

import MainView from "../../elements/MainView/MainView";

export default function MainPage(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <MainPageInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function MainPageInner({socket}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nsUrl, setNsUrl] = useState("lorawan-ns-na.tektelic.com")
    const [sensors, setSensors] = useState([])
    const [activeSensor, setActiveSensor] = useState({name: "Loading sensors..."})
    const [sensorSelect, setSensorSelect] = useState(false)
    const [nsSelect, setNsSelect] = useState(false)
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const [external, setExternal] = useState(false);
    const [other, setOther] = useState(false)

    const handleSensorChange = (sensor) => {
        console.log(sensor)
        setActiveSensor(sensor)
        socket.emit("updateSensorId", sensor.id)
    }

    const login = () => {
        socket.emit("login", {nsUrl: nsUrl, username: username, password: password})
    }

    useEffect(()=>{
        if (socket !== null) {
            socket.emit("getAvailableSensors")
            socket.on("availableSensors", (availableSensors) => {
                setInvalidCredentials(false)
                console.log(availableSensors)
                setSensors(availableSensors)
                handleSensorChange(availableSensors[0])
            })
            socket.on("loginFail", ()=>{
                setInvalidCredentials(true)
            })
            socket.on("loginSuccess", ()=>{
                socket.emit("getUserApplications")
            })
        }
    }, [socket])

    return (
        <Fragment>
            <Row style={{margin: 20}}>
                <Col sm={12} lg={2} xs={12}>
                    <Dropdown
                        open={sensorSelect}
                        toggle={()=>setSensorSelect(!sensorSelect)}
                    >
                        <DropdownToggle
                            style = {{width: "100%"}}
                            caret
                            outline
                            theme="light"
                        >
                            {activeSensor.name}
                        </DropdownToggle>
                        <DropdownMenu>
                            {sensors.map((el, i)=>{
                                return (
                                    <DropdownItem onClick={()=>handleSensorChange(el)}>
                                        {el.name}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col sm={12} lg={2} xs={12} style={{display: external ? "none" : "inline-block"}}>
                    <FormInput
                        placeholder="Username"
                        value={username}
                        onChange={(event)=> {setUsername(event.target.value)}}
                    />
                </Col>
                <Col sm={12} lg={2} xs={12} style={{display: external ? "none" : "inline-block"}}>
                    <FormInput
                        placeholder="Password"
                        value={password}
                        onChange={(event)=> {setPassword(event.target.value)}}
                        type="password"
                    />
                </Col>
                <Dropdown open={nsSelect} toggle={()=>setNsSelect(!nsSelect)} >
                    <DropdownToggle
                        style = {{width: "100%"}}
                        caret
                        outline
                        theme="light"
                    >
                        {other ? "Other Instance" : nsUrl}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={()=>{
                            setNsUrl("lorawan-ns-na.tektelic.com")
                            setExternal(false)
                            setOther(false)
                        }}>
                            TEKTELIC NA
                        </DropdownItem>
                        <DropdownItem onClick={()=>{
                            setNsUrl("lorawan-ns-eu.tektelic.com")
                            setExternal(false)
                            setOther(false)
                        }}>
                            TEKTELIC EU
                        </DropdownItem>
                        <DropdownItem onClick={()=>{
                            setNsUrl("lorawan-ns-dev.tektelic.com")
                            setExternal(false)
                            setOther(false)
                        }}>
                            TEKTELIC DEV
                        </DropdownItem>
                        <DropdownItem onClick={()=>{
                            setNsUrl("")
                            setExternal(false)
                            setOther(true)
                        }}>
                            Other TEK-NS Instance
                        </DropdownItem>
                        <DropdownItem onClick={()=>{
                            setNsUrl("External NS")
                            setExternal(true)
                            setOther(false)
                        }}>
                            External NS
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Col sm={12} lg={2} xs={12} style={{display: !other ? "none" : "inline-block"}}>
                    <FormInput
                        placeholder="URL"
                        value={nsUrl}
                        onChange={(event)=> {setNsUrl(event.target.value)}}
                    />
                </Col>
                <Col sm={12} lg={1} xs={12} style={{display: external ? "none" : "inline-block"}}>
                    {/*<Button onClick={()=>mqttConnect()}>Connect</Button>*/}
                    <Button theme="success" onClick={login}>Connect</Button>
                </Col>
                <Col sm={12} lg={2} xs={12} style={{color: 'red'}}>
                    {
                        invalidCredentials ?
                            "Invalid Credentials"
                            :
                            null
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <MainView sensorData={activeSensor} external={external}/>
                    {/* sensors is passed down to DownlinkTab */}
                </Col>
            </Row>
        </Fragment>
    )


}
