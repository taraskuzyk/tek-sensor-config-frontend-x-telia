import React, {useMemo} from 'react'
import _ from 'lodash'

import TableLine from '@elements/DV_line/tableLine'


const Table = (props) => {

  const groupNameCounter = (el)=>{
    console.log('111', el)
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
    unique.map((el) => {
      const filteredData = data.filter((dataElement)=> {
        return dataElement["Group name"] === el
      })
      console.log('000', filteredData)
      
      return <TableLine
        sensorData = {filteredData} 
        params={props.params} 
        category={category} 
        element={filteredData} 
        groupCounter={groupNameCounter(el)} 
        key = {el}
        />
    }

    )
  }
  filterGroupName()

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
      {
        data.map((el, i)=>{
          return <TableLine 
          sensorData = {data} 
          params={props.params} 
          category={category} 
          element={el} 
          groupCounter={groupNameCounter(el)} 
          key = {el["Field name"]} />
        })
      }
      </tbody>
    </table>
  )
}

export default Table