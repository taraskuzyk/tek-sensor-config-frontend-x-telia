import React from 'react'
import TableLine from './TableLine/TableLine'

export default function Table ({
    downlinkData /*sent down to TableLine*/,
    rawData,
    category,
    setDownlinksObject
    }) {

    let unique = []
    console.log("data")
    console.log(rawData)
    for (let i = 0; i < rawData.length; i++){
        let isNew = true;
        for (const obj of unique) {
            if (
                (obj.group === rawData[i]["group_name"] && obj.category === rawData[i]["category_name"])
            ){
                isNew = false
            }
        }
        if (isNew){
            unique.push({
                // parameter: data[i]["parameter_name"],
                group: rawData[i]["group_name"],
                category: rawData[i]["category_name"]
            })
        }
    }

    const handleTableLineChange = (updateObject) => {
        if (updateObject) {
            console.log(updateObject)
            setDownlinksObject((oldObject)=>{
                // we need to overwrite only the desired group or field rather than the entire category, which is why
                // we're first figuring out category, group, and/or field before inserting the desired value
                // into downlinkObject
                var newObject = {...oldObject}
                var category = Object.keys(updateObject)[0]
                var group_or_field = Object.keys(updateObject[category])[0]

                if (updateObject[category][group_or_field] === null) {
                    // if the above is true then we need to either delete the group_or_field from the DL Object
                    // or not add it if it hasn't been added previously
                    if (newObject[category])
                        delete newObject[category][group_or_field]
                    return newObject
                }

                if (!newObject[category]){
                    newObject[category] = {}
                }
                newObject[category][group_or_field] = updateObject[category][group_or_field]

                return newObject
            })
        }
    }

    const tableLines = unique.map((el, i) => {
        const groupData = rawData.filter((dataElement) => {
            return dataElement["group_name"] === el.group && dataElement["category_name"] === el.category
        })
        console.log(el.group, el.category)
        console.log(groupData)

        if (el.group === "") {
            return (
                groupData.map((data) => {
                    return <TableLine
                        downlinkData={downlinkData}
                        groupData={[data]}
                        key={data["category_name"] + "_" + data["parameter_name"]}
                        display={category === el.category ? "table-row" : "none"}
                        onChange={handleTableLineChange}
                    />
                })
            )
        }

        return <TableLine
            downlinkData={downlinkData}
            groupData={groupData}
            key={groupData[0]["category_name"] + "_" + groupData[0]["group_name"]}
            display={category === el.category ? "table-row" : "none"}
            onChange={handleTableLineChange}
        />
    })

    return (
        <table className="table mb-0">
            <thead className="bg-light">
            <tr className="smaller">
                <th scope="col" className="border-0" style = {{width: "30%"}}>Label</th>
                <th scope="col" className="border-0" style = {{width: "10%"}}></th>
                <th scope="col" className="border-0" style = {{width: "10%"}}></th>
                <th scope="col" className="border-0" style = {{width: "30%"}}>Value</th>
                {/*<th scope="col" className="border-0" style = {{width: "20%"}}>Base 64 Payload</th>*/}
            </tr>
            </thead>
            <tbody>
                {tableLines}
            </tbody>
        </table>
    )
}
