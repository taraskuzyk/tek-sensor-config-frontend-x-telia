import React, {Fragment, useMemo, useState} from 'react'

import './tableLine.scss'

import {
  FormCheckbox,
  // Button,
  // ButtonGroup,
} from 'shards-react'

import ButtonGroup from '@/elements/DV_buttonGroup/RWButtonGroup'
import Tooltip from '@/elements/DV_Tooltip/tooltip'


const TableLine = ({sensorData, params, element, category, groupCounter}) => {

  const [activeLine, setActiveLine] = useState(false)
  const activeLineHandler = () => {
    setActiveLine(!activeLine)
  }

  
  // console.log('tableline', sensorData, params, category );
  
  
  return (
    <Fragment>
      {
          <tr data-root={element["Category description"]} className={'tableLine ' + (activeLine && 'activeLine')}>
            <th scope="row" style={{'opacity':'100%'}} >{element["Field description"]}</th>
            <td rowSpan={element["Group name"] && groupCounter} className="switcher">
              <FormCheckbox
              toggle
              checked={activeLine}
              onChange={activeLineHandler}
              />
            </td>
            <td rowSpan={element["Group name"] && groupCounter} className="">
              <ButtonGroup element = {element} activeLine = {activeLine}/>
              {/* <Tooltip element={element}/> */}
            </td>
          </tr>
      }
      
    </Fragment>
  )
}


export default TableLine