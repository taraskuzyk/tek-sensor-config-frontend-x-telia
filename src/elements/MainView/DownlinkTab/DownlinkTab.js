import React, {Fragment, useState, useEffect} from 'react'
import {Container, Row, Col, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Button} from "shards-react";
import SocketContext from "../../../SocketContext";
import SendBytesMenu from "./SendBytesMenu/SendBytesMenu";
import Table from "./Table/Table"
import encode from "./Table/encode";
import Base64Binary from "../../../utils/Base64Binary";

export default function DownlinkTab(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <DownlinkTabInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function stringifyBytes(bytes){
    let stringBytes=""
    for (var i = 0; i < bytes.length; i++){
        let byte = bytes[i].toString(16).toUpperCase()
        if (byte.split("").length === 1)
            byte = "0" + byte
        stringBytes+= byte
    }

    return stringBytes
}

function DownlinkTabInner({sensorData, display, device, socket, manual}) {
    const [activeCategory, setActiveCategory] = useState()
    const [categorySelect, setCategorySelect] = useState(false)
    const [downlinksObject, setDownlinksObject] = useState({})
    const [encodedObject, setEncodedObject] = useState("")
    const [encodedString, setEncodedString] = useState("")

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    const sendDownlink = () => {
        var entries = Object.entries(encodedObject)
        for (const entry of entries) {
            socket.emit("downlink", {
                deveui: device.deviceEUI,
                port: entry[0],
                base64: Base64Binary.encode(entry[1])
            })
            console.log({
                deveui: device.deviceEUI,
                port: entry[0],
                base64: Base64Binary.encode(entry[1])
            })
        }

    }

    useEffect(()=>{
        if (sensorData && sensorData.downlink) {
            setActiveCategory( (Object.keys(sensorData.downlink))[0] )
        }
    }, [])

    useEffect(()=>{
        if (downlinksObject && sensorData.downlink){
            setEncodedObject(encode(downlinksObject, sensorData.downlink))
            let entries = Object.entries(encode(downlinksObject, sensorData.downlink))
            let str = ""
            for (let entry of entries){
                str+=`
                Port ${entry[0]}: 
                >>>Base 64 - ${Base64Binary.encode(entry[1])}
                >>>Hex     - ${stringifyBytes(entry[1])}
                `
            }
            setEncodedString(str)
        }
    }, [downlinksObject])

    useEffect(()=>{
        setDownlinksObject({})
    }, [sensorData])

    return (
        <Fragment>
            <Container style={{display: display}} fluid>

                <Row style={{display: !manual ? "flex" : "none"}}>
                    <Dropdown open={categorySelect} toggle={()=>setCategorySelect(!categorySelect)} >
                        <DropdownToggle>{activeCategory}</DropdownToggle>
                        <DropdownMenu>
                            {(Object.keys(sensorData.downlink)).map((el, i)=>{
                                return (
                                    <DropdownItem onClick={()=>handleCategoryClick(el)}>
                                        {el}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Button
                        style={{marginLeft: 20}}
                        disabled = {!device}
                        onClick={sendDownlink}
                        theme="success"
                    >
                        Send
                    </Button>
                </Row>

                {/*<Row>*/}
                {/*    <pre>*/}
                {/*        {JSON.stringify(downlinksObject, null, 2)}*/}
                {/*    </pre>*/}
                {/*</Row>*/}

                <Row>
                    <pre>
                         {encodedString}
                    </pre>

                </Row>

                <Row style={{display: manual ? "block" : "none"}}>
                    <SendBytesMenu device = {device}/>
                </Row>

                <Row style={{display: !manual ? "block" : "none"}}>

                    <Col sm={12} lg={12} xs={12}>
                        <Table
                            rawData = {sensorData.raw}
                            downlinkData = {sensorData.downlink}
                            category = {activeCategory}
                            device = {device}
                            setDownlinksObject={setDownlinksObject}
                        />
                    </Col>

                </Row>

            </Container>
        </Fragment>
    )
}
