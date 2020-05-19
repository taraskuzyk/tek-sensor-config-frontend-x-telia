import React, {Fragment, useMemo, useState} from 'react'

import './tableLine.scss'

import {
  FormCheckbox,
  // Button,
  // ButtonGroup,
} from 'shards-react'

import ButtonGroup from '@/elements/DV_buttonGroup/RWButtonGroup'
import Tooltip from '@/elements/DV_Tooltip/tooltip'
import Input from '@/elements/DV_Input/DVInput'




const TableLine = ({sensorData, params, element, category, groupCounter, groupName}) => {

  const [activeLine, setActiveLine] = useState(false)
  const activeLineHandler = () => {
    setActiveLine(!activeLine)
  }

  
  // console.log('tableline', sensorData, params, category );
  console.log(`in Group name ${groupName}, element array`, sensorData)
 
  
  return (
    <Fragment>
      
      {sensorData.map((el, i)=> {

        if (groupName === 'single') {
          return (
            <tr data-root={el["Category description"]} key={el["Field name"]} >
            <th scope="row" style={{'opacity':'100%'}} >{el["Field description"]}</th>
            <td className="switcher">
              <FormCheckbox
              toggle
              checked={activeLine}
              onChange={activeLineHandler}
              />
            </td>
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              <ButtonGroup element = {el} activeLine = {activeLine}/>
              {/* <Tooltip element={element}/> */}
            </td>
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              <Input element = {el} activeLine = {activeLine}/>
            </td>
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              Comment section
            </td>
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              Results HEX/Base64
            </td>
          </tr>
          )
        }
      
        return (
          <tr data-root={el["Category description"]} key={el["Field name"]}>
            <th scope="row" style={{'opacity':'100%'}} >{el["Field description"]}</th>
            {i === 0 && (
              <td rowSpan={sensorData.length} className="switcher">
              <FormCheckbox
              toggle
              checked={activeLine}
              onChange={activeLineHandler}
              />
            </td>
            )}
            {i === 0 && (
              <td rowSpan={sensorData.length} className={'tableLine ' + (activeLine && 'activeLine')}>
              <ButtonGroup element = {el} activeLine = {activeLine}/>
              {/* <Tooltip element={element}/> */}
              </td>
            )}
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              <Input element = {el} activeLine = {activeLine}/>
            </td>
            <td className={'tableLine ' + (activeLine && 'activeLine')}>
              Comment section
            </td>

            {i === 0 && (
              <td rowSpan={sensorData.length} className={'tableLine ' + (activeLine && 'activeLine')}>
              Results HEX/Base64
              </td>
            )}
            
          </tr>
        )
      })} 
      





      {
          
      }
      
    </Fragment>
  )
}


export default TableLine