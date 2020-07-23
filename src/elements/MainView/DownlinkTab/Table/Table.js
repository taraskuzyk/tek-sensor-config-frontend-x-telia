import React, {Fragment, useState} from 'react'
// import TableLine from './TableLine/tableLine'

export default function Table ({sensorData}) {

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

    // const tableLines = () => { // the process of selecting the right data can be more readable.
    //     const data = Object.keys(sensorData)
    //     console.log(data)
    //     const unique = [...new Set(data.map(item => item['Group name']))];
    //
    //     return unique.map((group) => {
    //             const groupData = data.filter((dataElement)=> {
    //                 return dataElement["Group name"] === group
    //             })
    //
    //             if(group === "") {
    //                 return (
    //                     groupData.map((data)=> {
    //                         return <TableLine
    //                             groupData = {[data]}
    //                             key = {data["Field name"]}
    //                         />
    //                     })
    //                 )
    //             }
    //
    //             return <TableLine
    //                 groupData = {groupData}
    //                 key = {group}
    //             />
    //         }
    //     )
    // }


    return (
        <Fragment>
        </Fragment>
    )
}
