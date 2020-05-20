import React, {useState, useMemo} from 'react'
 import {
  Button,
  ButtonGroup,
 } from 'shards-react'


 const RWButtonGroup = ({element, activeLine}) => {

  const [state, setState] = useState([...element["Access"]][0])
  const [active, setActive] = useState(false)

  const clickHandler = async (el, e) => {
    e.preventDefault()
    await setState(el)

  }
  // useMemo(()=> {
  //   ([...element["Access"]].length === 1) && setState([...element["Access"]][0])
  // }, [element, setState])


  return (

    <ButtonGroup vertical>
    {[...element["Access"]].map((el, i) =>{
      return <Button disabled={!activeLine} onClick={(e)=>clickHandler(el, e)} key={el} active = {el === state} size={"sm"} >{el === "R" ? "Read" : "Write"}</Button>
    })}
    </ButtonGroup>
  )
 }

 export default RWButtonGroup
