import React, {Fragment, useState} from 'react'

import './tableLine.scss'

import {FormCheckbox,} from 'shards-react'

import ButtonGroup from '../../elements/ButtonGroup/RWButtonGroup'
import Input from '../../elements/DV_Input/DVInput'
import encode_data from '../../features/homeSensorv3/downlink_home_sensor'

const TableLine = ({groupData, params}) => {
  let downlinkRead = {};
  let downlinkWrite = {};
  const [activeLine, setActiveLine] = useState(false)
  const [RW, setRW] = useState("R")
  const [payload, setPayload] = useState(encode_data(downlinkRead))

  const activeLineHandler = () => {
    setActiveLine(!activeLine)
  }

  //setting initial conditions for downlinkRead and downlinkWrite
  if (groupData[0]["Group name"] !== "") {
    downlinkRead[groupData[0]["Group name"]] = {"read": true};
    downlinkWrite[groupData[0]["Group name"]] = {"write": {}}
    for (let i = 0; i < groupData.length; i++) {
      downlinkWrite[groupData[i]["Group name"]]["write"][groupData[i]["Field name"]] = 0;
    }
  } else {
    downlinkRead[groupData[0]["Field name"]] = {"read": true};
    downlinkWrite[groupData[0]["Field name"]] = {"write": 0};
  }

  const handleRW = (element, value) => {
    setRW(value);
    if (value === "R") {
      console.log(downlinkRead)
      setPayload(encode_data(downlinkRead))
    } else {
      console.log(downlinkWrite)
      setPayload(encode_data(downlinkWrite))
    }
  }

  const handleInput = (element, value) => {
    if (element["Group name"] !== ""){
      downlinkWrite[element["Group name"]]["write"][element["Field name"]] = value;
    } else {
      downlinkWrite[element["Field name"]] = {"write": value};
    }
    setPayload(encode_data(downlinkWrite))
  }

  return (
    <Fragment>
      {groupData.map((el, i)=> {
        if (el["Group name"] === '') {
          return (
            <tr data-root={el["Category description"]} key={el["Field name"]}>
              <th scope="row" style={{'opacity':'100%'}} >{el["Field description"]}</th>
              <td className="switcher">
                <FormCheckbox
                  toggle
                  checked={activeLine}
                  onChange={activeLineHandler}
                />
              </td>
              <td className={'tableLine ' + (activeLine && 'activeLine')}>
                <ButtonGroup element = {el} activeLine = {activeLine} onChange={handleRW}/>
              </td>
              <td className={'tableLine ' + (activeLine && 'activeLine')}>
                {RW === "W" && <Input element = {el} activeLine = {activeLine} onChange={handleInput}/>}
              </td>
              <td className={'tableLine ' + (activeLine && 'activeLine')}>
                {payload}
              </td>
            </tr>
          )
        }

        return (
          <tr data-root={el["Category description"]} key={el["Field name"]}>
            <th scope="row" style={{'opacity':'100%'}} >{el["Field description"]}</th>
            {i === 0 && (
              <td rowSpan={groupData.length} className="switcher">
              <FormCheckbox
                toggle
                checked={activeLine}
                onChange={activeLineHandler}
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

export default TableLine