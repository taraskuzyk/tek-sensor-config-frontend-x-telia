import React, {Fragment, useState, useEffect} from 'react'
import {
    Card,
    CardHeader,
    Col,
    Container,
    Row,
    Button,
    CardBody,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Dropdown, FormInput, FormRadio, FormCheckbox
} from "shards-react";
import Base64Binary from "../../utils/Base64Binary"
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

function MainViewInner({socket, sensorData, external}){
    if (socket) {

    }
    const [applications,       setApplications]       = useState([]) //TODO: applications and devices should be classes
    // maybe some sort of a "smart" array class that holds one extra variable, which is the "active" element
    const [activeApplication,  setActiveApplication]  = useState()
    const [devices,            setDevices]            = useState({})
    const [activeDevice,       setActiveDevice]       = useState()
    const [isDownlinkSelected, setIsDownlinkSelected] = useState(false)
    const [directionSelect,    setDirectionSelect]    = useState(false)
    const [displayIndex,       setDisplayIndex]       = useState(0)
    const [manual,             setManual]             = useState(false) // whether you want to manually write bytes OR build a message

    /****** MANUAL DECODER ******/
    const [payload,    setPayload]    = useState("")
    const [port,      setPort]      = useState("")
    const [isHex,     setIsHex]     = useState(false)
    const [encrypted, setEncrypted] = useState(false)
    const [appkey,    setAppkey]    = useState("")
    const [nwkkey,    setNwkkey]    = useState("")
    /****************************/

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

    const decode = () => {
        let base64payload;
        if (isHex) {
            let bytes = hexStringToBytes(payload)
            base64payload = Base64Binary.encode(bytes)
        } else {
            base64payload = payload
        }

        let obj;
        if (encrypted) {
            obj = {
                nwkkey: nwkkey,
                appkey: appkey,
                payload: base64payload
            }
        } else {
            obj = {
                payload: base64payload,
                port: port
            }
        }
        socket.emit("decode", obj)
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

    }, [socket])

    return (
        <Fragment>
            <div>
                <Container fluid>
                    <Row>
                        <MenuCol
                            style={{display: external ? "none" : "inline-block"}}
                            lg={2}
                            header="Applications"
                            items={applications}
                            onClick={handleApplicationChange}
                            getItemDisplay={(item) => item.name}
                        />

                        <MenuCol
                            style={{display: external ? "none" : "inline-block"}}
                            lg={2}
                            header={"Devices"}
                            items={devices}
                            onClick={handleDeviceChange}
                            getItemDisplay={(item) => item.name}
                        />

                        <Col sm={12} lg={4} xs={12} style={{display: !external ? "none" : "inline-block"}}>
                            <Card>
                                <CardHeader>
                                    Decode Payload
                                </CardHeader>
                                <CardBody>
                                    <div style={{display: "flex"}}>
                                        <FormInput
                                            placeholder="Insert Payload here..."
                                            value={payload}
                                            onChange={(event)=> {setPayload(event.target.value.replace(" ", ""))}}
                                        />
                                        <FormInput
                                            style={{display: encrypted ? "none" : "block"}}
                                            placeholder="Port"
                                            value={port}
                                            onChange={(event)=> {setPort(event.target.value.replace(" ", ""))}}
                                        />
                                    </div>

                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div style={{display: "flex"}}>
                                            <FormRadio
                                                name="hex"
                                                checked={!isHex}
                                                onChange={()=>setIsHex(false)}
                                            >
                                                Base 64
                                            </FormRadio>
                                            <FormRadio
                                                style={{paddingLeft: 20}}
                                                name="hex"
                                                checked={isHex}
                                                onChange={()=>setIsHex(true)}
                                            >
                                                Hex
                                            </FormRadio>
                                        </div>
                                        <FormCheckbox
                                            checked={encrypted}
                                            onChange={()=>setEncrypted(!encrypted)}
                                        >
                                            LoRa-encrypted
                                        </FormCheckbox>
                                    </div>
                                    <div style={{display: !encrypted ? "none" : "block"}}>
                                        <FormInput
                                            placeholder="App Session Key"
                                            value={appkey}
                                            onChange={(event)=> {setAppkey(event.target.value.replace(" ", ""))}}
                                        />
                                        <FormInput
                                            placeholder="Network Session Key"
                                            value={nwkkey}
                                            onChange={(event)=> {setNwkkey(event.target.value.replace(" ", ""))}}
                                        />
                                    </div>
                                    <Button onClick={decode}>
                                        Decode
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm={12} lg={8} xs={12}>
                            <Card>
                                <CardHeader style={{display: 'flex'}}>
                                    <Dropdown open={directionSelect} toggle={()=>setDirectionSelect(!directionSelect)}>
                                        <DropdownToggle
                                            caret
                                            outline
                                        >
                                            {isDownlinkSelected ? "Downlink" : "Uplink"}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={()=>setIsDownlinkSelected(true)}>
                                                Downlink
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>setIsDownlinkSelected(false)}>
                                                Uplink
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Button
                                        style = {{display: !isDownlinkSelected && !external ? "inline-block" : "none", marginLeft: 40}}
                                        onClick={()=> setDisplayIndex(0)}
                                        active={displayIndex===0}
                                        outline
                                        //theme={displayIndex===0 ? "primary" : "light"}
                                    >
                                        Network Server
                                    </Button>
                                    <Button
                                        style = {{display: !isDownlinkSelected ? "inline-block" : "none", marginLeft: 20 }}
                                        onClick={()=> setDisplayIndex(1)}
                                        active={displayIndex===1}
                                        outline
                                        //theme={displayIndex===1 ? "primary" : "light"}
                                    >
                                        App
                                    </Button>
                                    <Button
                                        style = {{display: !isDownlinkSelected ? "inline-block" : "none", marginLeft: 20 }}
                                        onClick={()=> setDisplayIndex(2)}
                                        active={displayIndex===2}
                                        outline
                                        //theme={displayIndex===2 ? "primary" : "light"}
                                    >
                                        LoRaMAC
                                    </Button>
                                    <Button
                                        style = {{display: isDownlinkSelected ? "inline-block" : "none", marginLeft: 20}}
                                        onClick={()=>setManual(true)}
                                        active={manual}
                                        outline
                                    >
                                        Manual
                                    </Button>
                                    <Button
                                        style = {{display: isDownlinkSelected ? "inline-block" : "none", marginLeft: 0}}
                                        onClick={()=>setManual(false)}
                                        active={!manual}
                                        outline
                                    >
                                        Generate
                                    </Button>
                                </CardHeader>
                                <CardBody>
                                    <UplinkTab
                                        display = {!isDownlinkSelected ? "flex" : "none" }
                                        displayIndex = {displayIndex}
                                    />
                                    {
                                        sensorData && sensorData.downlink && sensorData.raw ?
                                            <DownlinkTab
                                                display = {isDownlinkSelected ? "block" : "none" }
                                                manual = {manual}
                                                sensorData = {sensorData}
                                                device = {activeDevice}
                                            />
                                            :
                                            null
                                    }
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

function hexStringToBytes (hexString) {
    let string = hexString.split("")
    let byte_array = []
    while (string.length > 0) {
        byte_array = [...byte_array, parseInt("0x"+(string.splice(0, 2)).join(""))]
    }
    // console.log(byte_array)
    return byte_array
}
