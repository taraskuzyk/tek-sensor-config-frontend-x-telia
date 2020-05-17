import React, {useState, Fragment} from 'react'

import './dropdown.scss'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "shards-react";


import { 
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom"



const DV_Dropdown = (props) => {
  const [open, setOpen] = useState(false)

  const search = useLocation().search;
  const params = new URLSearchParams(search)  

  const currentTab = params.has('category') ? params.get('category') : 'Select Category'
  console.log('currentTab:', currentTab)
  
  

  const handler = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <Dropdown open={open} toggle={handler}>
      <DropdownToggle className="dropdown-toggle ">
        {currentTab}
      </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  )
}



export default DV_Dropdown
