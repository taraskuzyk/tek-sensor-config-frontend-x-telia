import React, {useState} from 'react'
 import {
  Button,
  ButtonGroup,
 } from 'shards-react'


 const RWButtonGroup = ({element, activeLine}) => {

  const [state, setState] = useState(false)

  const clickHandler = async (el, e) => {
    e.preventDefault()
    await setState(el)

    console.log(state);
    
  }
  return (
    <ButtonGroup vertical>
    {[...element["Access"]].map((el, i) =>{
      return <Button disabled={!activeLine} onClick={(e)=>clickHandler(el, e)} key={el}>{el}</Button>
    })}
    </ButtonGroup>
  )
 }

 export default RWButtonGroup