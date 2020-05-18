import React, {Fragment, useMemo, useState} from 'react'

import './tableLine.scss'

import {
  FormCheckbox,
  Button,
  ButtonGroup,
} from 'shards-react'


const TableLine = ({sensorData, params, element, category, groupCounter}) => {

  const [activeLine, setActiveLine] = useState(false)
  const activeLineHandler = () => {
    setActiveLine(!activeLine)
  }

  
  console.log('tableline', sensorData, params, category );

  console.log('rw:', element["Access"].length)
  
  
  return (
    <Fragment>
      {
          <tr data-root={element["Category description"]} className={'tableLine ' + (activeLine && 'activeLine')}>
            <th scope="row">{element["Field description"]}</th>
            <td rowSpan={element["Group name"] && groupCounter} className="switcher">
              <FormCheckbox
              toggle
              checked={activeLine}
              onChange={activeLineHandler}
              />
            </td>
            <td rowSpan={element["Group name"] && groupCounter} className="">
              <ButtonGroup vertical>
                {[...element["Access"]].map((el) =>{
                  return <Button disabled={!activeLine}>{el}</Button>
                })}
              </ButtonGroup>
            </td>
          </tr>
      }
      
    </Fragment>
  )
}


export default TableLine