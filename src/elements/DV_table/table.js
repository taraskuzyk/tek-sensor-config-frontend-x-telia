import React, {useMemo} from 'react'
import _ from 'lodash'
import TableLine from '@elements/DV_line/tableLine'

const Table = (props) => {

  const groupNameCounter = (el) =>{
    if (!el) {
      return
    }
    return _.countBy(props.sensorData.data, (rec)=>{
        return el["Group name"] === rec["Group name"]
    }).true
  }

  const category = props.params.has('category') ? props.params.get('category') : 'all'
  const data = useMemo(()=>{

    if (category === 'all') {
      return props.sensorData.data
    }

    return props.sensorData.data.filter((el)=>{
      return el["Category description"] === category
    })

  }, [props.sensorData, category])

  const filterGroupName = () => {
    const unique = [...new Set(data.map(item => item['Group name']))];

    const a = unique.map((el) => {
      const filteredData = data.filter((dataElement)=> {
        return dataElement["Group name"] === el
      })

      if(el === "") {
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
    return a
  }


  return (
    <table className="table mb-0">
      <thead className="bg-light">
        <tr className="smaller">
          <th scope="col" className="border-0">Label</th>
          <th scope="col" className="border-0"></th>
          <th scope="col" className="border-0"></th>
          <th scope="col" className="border-0">Value</th>
          {/*<th scope="col" className="border-0">Comment</th>*/}
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
