import React, {useMemo, useState} from 'react'
import TableLine from '@elements/DownlinkTableLine/tableLine'

const Table = (props) => {

  const [downlink, setDownlink] = useState({})

  const handleDownlinkChange = (sensorData, group, field, value) => {
    let newDownlink = downlink;
    if (group === "single"){
      if (downlink.hasOwnProperty(field)){

      }
    }
    newDownlink[field] = value;
    setDownlink(newDownlink);
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

  const tableLines = () => { // the process of selecting the right data can be more readable.
    const unique = [...new Set(data.map(item => item['Group name']))];

    return unique.map((group) => {
          const groupData = data.filter((dataElement)=> {
            return dataElement["Group name"] === group
          })

          if(group === "") {
            return (
                groupData.map((data)=> {
                  return <TableLine
                      groupData = {[data]}
                      key = {data["Field name"]}
                  />
                })
            )
          }

          return <TableLine
              groupData = {groupData}
              key = {group}
          />
        }
    )
  }


  return (
    <table className="table mb-0">
      <thead className="bg-light">
        <tr className="smaller">
          <th scope="col" className="border-0" style = {{width: "30%"}}>Label</th>
          <th scope="col" className="border-0" style = {{width: "10%"}}></th>
          <th scope="col" className="border-0" style = {{width: "10%"}}></th>
          <th scope="col" className="border-0" style = {{width: "30%"}}>Value</th>
          <th scope="col" className="border-0" style = {{width: "20%"}}>Base 64 Payload</th>
        </tr>
      </thead>
      <tbody>
        {tableLines()}
      </tbody>
    </table>
  )
}

export default Table
