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
  useLocation, 
  NavLink
} from "react-router-dom"



const DV_Dropdown = (props) => {
  const [open, setOpen] = useState(false)

  const search = useLocation().search;
  const location = useLocation()
  const params = new URLSearchParams(search)  

  const currentTab = params.has('category') ? params.get('category') : 'Select Category'
  console.log('currentTab:22', props.dropdown, currentTab)
  
  

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
        <DropdownItem key='i9' >
            <NavLink to={{
              'pathname': location.pathname,
              // 'search': `category=${el}`
            }} >
            All Categories
            </NavLink>
          </DropdownItem>
        {    
          props.dropdown.map((el, i)=> {
              return (
                <DropdownItem key={i} >
                  <NavLink to={{
                    'pathname': location.pathname,
                    'search': `category=${el}`
                  }} >
                  {el}
                  </NavLink>
                </DropdownItem>
              )
            })
        }
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  )
}



export default DV_Dropdown
