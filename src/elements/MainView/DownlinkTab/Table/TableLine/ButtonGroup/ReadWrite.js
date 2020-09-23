import React, {useState} from 'react'
import {Button, ButtonGroup,} from 'shards-react'


const ReadWrite = ({element, activeLine, onChange}) => {

  const [state, setState] = useState([...element["access"]][0])
  const [active, setActive] = useState(false)

  const clickHandler = async (el, e) => {
    e.preventDefault()
    await setState(el)
    onChange(element, el)
  }
  // useMemo(()=> {
  //   ([...element["Access"]].length === 1) && setState([...element["Access"]][0])
  // }, [element, setState])


  return (

    <ButtonGroup vertical>
    {[...element["access"]].map((el, i) =>{
      return <Button outline disabled={!activeLine} onClick={(e)=>clickHandler(el, e)} key={el} active = {el === state} size={"sm"} >{el === "R" ? "Read" : "Write"}</Button>
    })}
    </ButtonGroup>
  )
 }

 export default ReadWrite
