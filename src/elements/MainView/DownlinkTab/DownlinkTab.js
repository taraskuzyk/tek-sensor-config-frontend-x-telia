import React, {Fragment} from 'react'
import {Container, Row} from "shards-react";
import SocketContext from "../../../SocketContext";
import MenuCol from "../../MenuCol/MenuCol";
import SendBytesMenu from "./SendBytesMenu/SendBytesMenu";

export default function DownlinkTab(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <DownlinkTabInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function DownlinkTabInner({sensorData, display, device, socket}) {


    const handleCategoryClick = () => {
        console.log("(^.^)(._.) ")
        console.log("  ===( =>=>")
        console.log("  8=(  )   ")
        console.log(" ||  ||    ")
        console.log("^code ^me")

    }

    return (
        <Fragment>
            <Container style={{display: display}} fluid>

                <Row>
                    <SendBytesMenu device = {device}/>
                </Row>

                <Row style={{marginTop: 20}}>
                    <MenuCol
                        lg={3}
                        header="Categories (under dev)"
                        items={Object.keys(sensorData)}
                        onClick={handleCategoryClick}
                        getItemLabel={(item)=> item}
                    />
                </Row>

            </Container>
        </Fragment>
    )
}
