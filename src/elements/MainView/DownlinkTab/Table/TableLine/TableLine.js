import React, {Fragment, useState, useEffect} from 'react'

import {FormCheckbox,} from 'shards-react'

import ButtonGroup from './ButtonGroup/ReadWrite'
import Input from './Input/Input'
import SocketContext from "../../../../../SocketContext";

// I ripped my hair out trying to keep the decoders/encoders and NS communication strictly on the backend.
// I gave up. I'm not sure if this is easy to fix, but I just couldn't give less of a crap at this point.
// Sorry.
// The reason I gave up is I spent two days trying to get the front to send JSON to encode to backend, and then
// the backend to send the encoded bytes back here (the bytes are awaited with a Promise)
// to display to the user. However, something stupid happens when
// you try to update the state of a downlinkWrite or payload using a Promise: useState doesn't await the Promise, even
// after explicitly stating *await* in front of it.
// So, to avoid this problem, I'm adding encode.js from the backend to the frontend.

import encode from '../encode'

export default function TableLine(props){
    return(
        <Fragment>
            <SocketContext.Consumer>
                {socket => <TableLineInner {...props} socket={socket}/>}
            </SocketContext.Consumer>
        </Fragment>
    )
}

function TableLineInner({groupData, downlinkData, display, onChange, key}){
    const [downlinkWrite, setDownlinkWrite] = useState({})
    const [downlinkRead, setDownlinkRead] = useState({})

    const [activeLine, setActiveLine] = useState(false)
    const [RW, setRW] = useState("R")
    const [payload, setPayload] = useState("")

    const handleRW = async (element, value) => {
        setRW(value);
        setPayload(JSON.stringify(
            encode(value ==='R' ? downlinkRead : downlinkWrite, downlinkData),
            null,
            2
        ))
    }

    const handleActiveLineChange = () => {

        var category = Object.keys(downlinkWrite)[0]
        var group_or_field = Object.keys(downlinkWrite[category])[0]

        var newObject = {
            [category]: {
                [group_or_field]: (activeLine) ? null : (RW ==='R' ? downlinkRead : downlinkWrite)[category][group_or_field]
                // activeLine === true means that it will be false in the end of the function, so treat it as
                // already false. this makes the Table ignore it while the line isn't active
            }
        }

        onChange(newObject)

        // activeLine chagnes asynchronously, so we change it in the end. If we're changing to false, we're treating it
        // as false above
        setActiveLine(!activeLine)
    }

    const handleInput = async (element, value) => {
        setDownlinkWrite((downlinkWrite)=>{
            if (!downlinkWrite) { // if downlink is somehow not initiated, although this *shouldn't* happen
                downlinkWrite = {}
                downlinkWrite[element["category_name"]] = {}
                if (element["group_name"] !== ""){
                    downlinkWrite[element["category_name"]][element["group_name"]] = {"write": {}}
                }
            }
            if (element["group_name"] !== ""){
                downlinkWrite[element["category_name"]][element["group_name"]]["write"][element["parameter_name"]] = value;
            } else {
                downlinkWrite[element["category_name"]][element["parameter_name"]] = {"write": value};
            }
            return {...downlinkWrite}
        })
    }

    useEffect(()=>{
        if (activeLine){
            setPayload(JSON.stringify(encode(RW ==='R' ? downlinkRead : downlinkWrite, downlinkData), null, 2))
            onChange(RW ==='R' ? downlinkRead : downlinkWrite)
        }
    }, [downlinkWrite, downlinkRead])

    //setting initial conditions for downlinkRead and downlinkWrite
    useEffect(()=>{
        setActiveLine(false)
        setDownlinkRead((downlinkRead) => {
            downlinkRead[groupData[0]["category_name"]] = {}
            if (groupData[0]["group_name"] !== "") {
                downlinkRead[groupData[0]["category_name"]][groupData[0]["group_name"]] = {"read": true};
            }
            else {
                downlinkRead[groupData[0]["category_name"]][groupData[0]["parameter_name"]] = {"read": true};
            }
            return {...downlinkRead}
        })
        setDownlinkWrite((downlinkWrite)=>{
            if (groupData[0]["access"] !== "" || groupData[0]["access"] !== "R"){
                downlinkWrite[ groupData[0]["category_name"] ] = {}
                if (groupData[0]["group_name"] !== "") {
                    downlinkWrite[groupData[0]["category_name"]][groupData[0]["group_name"]] = {"write": {}}
                    for (let i = 0; i < groupData.length; i++) {
                        downlinkWrite[groupData[i]["category_name"]][groupData[i]["group_name"]]["write"][groupData[i]["parameter_name"]] = 0;

                    }
                } else {
                    downlinkWrite[groupData[0]["category_name"]][groupData[0]["parameter_name"]] = {"write": 0};
                }
            }
            return {...downlinkWrite}
        })
    }, [downlinkData])

    return (
        <Fragment>
            {groupData.map((el, i)=> {
                return (
                    <tr
                        data-root={el["category_description"]}
                        key={key}
                        style={{display: display}}
                    >
                        <th scope="row" style={{'opacity':'100%'}} >{el["parameter_description"]}</th>
                        {i === 0 && (
                            <td rowSpan={groupData.length} className="switcher">
                                <FormCheckbox
                                    toggle
                                    checked={activeLine}
                                    onChange={handleActiveLineChange}
                                />
                            </td>
                        )}
                        {i === 0 && (
                            <td rowSpan={groupData.length} className={'tableLine ' + (activeLine && 'activeLine')}>
                                <ButtonGroup element = {el} activeLine = {activeLine} onChange={handleRW}/>
                            </td>
                        )}
                        <td className={'tableLine ' + (activeLine && 'activeLine')}>
                            {RW === "W" && <Input element = {el} activeLine = {activeLine} onChange={handleInput}/>}
                        </td>

                        {i === 0 && (
                            <td rowSpan={groupData.length} className={'tableLine ' + (activeLine && 'activeLine')}>
                                {payload}
                            </td>
                        )}
                    </tr>
                )
            })}
        </Fragment>
    )
}
