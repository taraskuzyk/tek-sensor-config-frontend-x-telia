import React, {Fragment, useState, useEffect} from 'react'
import {Button, Col, FormInput, Row} from "shards-react";
import SocketContext from "../../../SocketContext";
import {timestampToString} from "../../../utils/timeConversions";
import ItemList from "../../ItemList/ItemList";
import _ from "lodash";

export default function UplinkTab (props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <UplinkViewInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function UplinkViewInner({socket, displayIndex, display}){
    if (socket) {

    }

    const [displayNetwork, setDisplayNetwork] = useState("")
    const [displayApp, setDisplayApp] = useState("")
    const [displayLora, setDisplayLora] = useState("")
    const [page, setPage] = useState(1)
    const [messages, setMessages] = useState([])

    const handleMessageChange = (message) => {
        setDisplayNetwork(
            JSON.stringify(
                message.ns,
                null,
                2
            )
        )
        setDisplayApp(
            JSON.stringify(
                message.app,
                null,
                2
            )
        )
        setDisplayLora(
            JSON.stringify(
                message.lora,
                null,
                2
            )
        )
    }

    const handlePageChange = (n) => {
        setPage(page => parseInt(page) + parseInt(n))
    }

    useEffect(()=>{
        if (messages && messages.length !== 0)
            handleMessageChange(messages[0])
        else
            handleMessageChange({
                ns: "No messages to show from this sensor.",
                app: "No messages to show from this sensor.",
                lora: "No messages to show from this sensor."
            })
    }, [messages])

    useEffect(()=>{
        socket
        .on("allDeviceMessages", (messages) => {
            console.log(messages)
            setMessages(oldMessages => _.reverse(messages))
        })
        .on("newDeviceMessage", (message) => {
            console.log(message)
            setMessages(oldMessages => [message, ...oldMessages])
        })
        .on("decodedMessage", (message) => {
            console.log(message)
            setMessages(oldMessages => [message, ...oldMessages])
        })
    }, [socket])

    return (
        <Fragment>
            <Row style={{display: display, width: "100%"}}>
                <Col sm={12} lg={5} xs={12}>
                    {messages.length > 0 ?
                        <Fragment>
                            <ItemList
                                items = {messages.slice( 20*(page-1), 20*(page) )}
                                onClick = {handleMessageChange}
                                getItemDisplay={(item)=> {
                                    return timestampToString(item.ns.ts) + "  |  " + item.ns.messageType + " | " +
                                        item.ns.fport
                                }}
                            />
                            <Row>
                                <Button
                                    onClick = {()=>handlePageChange(-1)}
                                >
                                    <p>{"<<"}</p>
                                </Button>
                                <FormInput
                                    style={{width: "30%"}}
                                    value={page}
                                    onChange = {(e)=>{
                                        if (e.target.value !== "")
                                            setPage(e.target.value)
                                    }}
                                    placeholder="Page number (1-50)"
                                />
                                <Button
                                    onClick = {()=>handlePageChange(+1)}
                                >
                                    <p>{">>"}</p>
                                </Button>
                            </Row>

                        </Fragment>
                        :
                        null

                    }
                </Col>

                <Col sm={12} lg={7} xs={12}>
                    <pre>
                        {displayIndex === 0 ?
                            displayNetwork :
                            displayIndex === 1 ?
                                displayApp :
                                displayLora
                        }
                    </pre>
                </Col>
            </Row>
        </Fragment>
    )
}

