import React, {Fragment, useMemo, useState, useEffect} from 'react'
import {Card, CardText, CardHeader, Col, Container, Row} from "shards-react";
import ItemList from "../ItemList/ItemList";
import _ from 'lodash'

export default function UplinkTab({messages}){

    /*const [devices, setDevices] = useState({})*/

    const devices = _.uniq(messages.map((msg)=>msg.raw.payloadMetaData.deviceMetaData.deviceEUI))
    const [activeDevice, setActiveDevice] = useState()
    const [activeTimestamp, setActiveTimestamp] = useState()
    const [displayNetwork, setDisplayNetwork] = useState("")
    const [displayPayload, setDisplayPayload] = useState("")


    const handleDeviceClick = (deveui) => {
        setActiveDevice(deveui)
    }
    const handleTimestampClick = (message) => {
        console.log("Inside handleTimestampClick")
        console.log(messages)
        console.log(message)
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
        if ((activeDevice === undefined || activeDevice === null) && messages.length > 0){
            setActiveDevice(devices[0])
            setActiveTimestamp(messages[0].raw.serverTimestamp)
            setDisplayNetwork(
                JSON.stringify(
                    messages[0].raw,
                    null,
                    2
                )
            )
            setDisplayPayload(
                JSON.stringify(
                    messages[0].decoded,
                    null,
                    2
                )
            )
        }
    }, [messages])

    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={2} xs={12}>
                        <Card>
                            <CardHeader>
                                Device EUI
                            </CardHeader>
                            {devices.length > 0 ?
                                <ItemList
                                    items = {devices}
                                    onClick = {handleDeviceClick}
                                    getItemLabel = {(item)=> item}
                                />
                                :
                                null

                            }
                        </Card>
                    </Col>

                    <Col sm={12} lg={2} xs={12}>
                        <Card>
                            <CardHeader>
                                Date
                            </CardHeader>
                            {activeDevice!==null && activeDevice!==undefined ?
                                <ItemList
                                    items = {
                                        _.filter(messages, (msg)=> {
                                            return msg.raw.payloadMetaData.deviceMetaData.deviceEUI === activeDevice ? activeDevice : devices[0]
                                        })
                                    }
                                    onClick = {handleTimestampClick}
                                    getItemLabel = {(item)=> {
                                        let date = new Date(item.raw.serverTimestamp)
                                        let hours = date.getHours()
                                        let minutes = date.getMinutes()
                                        let seconds = date.getSeconds()
                                        let day = date.getDate()
                                        let month = date.getMonth()+1
                                        console.log(typeof date)
                                        return (
                                            ( hours   > 9 ? hours   : ("0"+hours) )  + ":" +
                                            ( minutes > 9 ? minutes : ("0"+minutes) ) + ":" +
                                            ( seconds > 9 ? seconds : ("0"+seconds) ) + ", " +
                                            day + "/" + month
                                        )
                                    }}
                                />
                                :
                                null
                            }
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} xs={12}>

                        <Card>
                            <CardHeader>
                                Network Layer
                            </CardHeader>
                            <CardText>
                                <pre>
                                    {displayNetwork}
                                </pre>
                            </CardText>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} xs={12}>
                        <Card>
                            <CardHeader>
                                Decoded Payload
                            </CardHeader>
                            <CardText>
                                <pre>
                                    {displayPayload}
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

