import React, {useMemo} from 'react'
import _ from 'lodash'

import TableLine from '@elements/DV_line/tableLine'
import { Fragment } from 'react'


const Table = (props) => {

  const groupNameCounter = (el)=>{
    // console.log('111', el)
    if (!el) {
      return
    }
    return _.countBy(props.sensorData.data, (rec)=>{
              
      // console.log('33', rec);
      
      return el["Group name"] === rec["Group name"]
    }).true
  }

  


  const category = props.params.has('category') ? props.params.get('category') : 'all'
  const data = useMemo(()=>{
    
    // console.log(typeof(sensorData));
    
    if (category === 'all') {
      return props.sensorData.data
    }

    return props.sensorData.data.filter((el)=>{
      return el["Category description"] === category
    })

  }, [props.sensorData, category])

  const filterGroupName = () => {
    const unique = [...new Set(data.map(item => item['Group name']))];
    console.log('aaaa', unique)

   const a = unique.map((el) => {
      const filteredData = data.filter((dataElement)=> {
        return dataElement["Group name"] === el
      })
      
      console.log(`all elements from data for ${el || "_"}`, filteredData)
      
      if(el === "") {
        console.log('Найдено!!!')
        return (
          
          filteredData.map((FD)=> {
          return <TableLine
            sensorData = {[FD]} 
            params={props.params} 
            category={category} 
            element={[FD]}
            groupName = "single" 
            groupCounter= {0} 
            key = {FD["Field name"]}
            />
        })
          
        )
      }

      return <TableLine
        sensorData = {filteredData} 
        params={props.params} 
        category={category} 
        element={filteredData}
        groupName = {el} 
        groupCounter={groupNameCounter(el)} 
        key = {el}
        />
    }
    )
    console.log('bbb', a)
    return a 
  }


  return (
    <table className="table mb-0">
      <thead className="bg-light">
        <tr className="smaller">
          <th scope="col" className="border-0">Label</th>
          <th scope="col" className="border-0">Presence</th>
          <th scope="col" className="border-0">Read/Write</th>
          <th scope="col" className="border-0">Value</th>
          <th scope="col" className="border-0">Comment</th>
          <th scope="col" className="border-0">Result</th>
        </tr>
      </thead>
      <tbody>

        {filterGroupName()}
      </tbody>
    </table>
  )
}

export default Table