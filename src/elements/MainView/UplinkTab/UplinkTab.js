import React, {Fragment, useState} from 'react'
import {Col, Row} from "shards-react";
import SocketContext from "../../../SocketContext";
import {timestampToString} from "../../../utils/timeConversions";
import ItemList from "../../ItemList/ItemList";

export default function UplinkTab (props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <UplinkViewInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function UplinkViewInner({socket, messages, displayIndex, display}){
    if (socket) {

    }

    const [displayNetwork, setDisplayNetwork] = useState("")
    const [displayApp, setDisplayApp] = useState("")
    const [displayLora, setDisplayLora] = useState("")

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

    return (
        <Fragment>
            <Row style={{display: display, width: "100%"}}>
                <Col sm={12} lg={3} xs={12}>
                    {messages.length > 0 ?
                        <ItemList
                            items = {messages}
                            onClick = {handleMessageChange}
                            getItemLabel={(item)=> {
                                return timestampToString(item.ns.ts)
                            }}
                        />
                        :
                        null

                    }
                </Col>

                <Col sm={12} lg={9} xs={12}>
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

