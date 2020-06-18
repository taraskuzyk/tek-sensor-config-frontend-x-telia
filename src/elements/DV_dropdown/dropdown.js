import React, {Fragment, useState} from 'react'

import './dropdown.scss'

import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "shards-react";
import {NavLink, useLocation, useHistory} from "react-router-dom"


const DV_Dropdown = (props) => {
    const [open, setOpen] = useState(false)

    const history = useHistory()
    const search = useLocation().search;
    const location = useLocation()
    const params = new URLSearchParams(search)
    const currentTab = params.has('category') ? params.get('category') : 'All Categories'

    const handler = () => {
        setOpen(!open)
    }

    return (
        <Fragment>
            <Dropdown open={open} toggle={handler} size = 'lg'>
                <DropdownToggle className="dropdown-toggle ">
                    {currentTab}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem key='i9' onClick = {()=>history.push(location.pathname)}>
                        <div style={{fontSize: 20}}>
                            All Categories
                        </div>
                    </DropdownItem>
                    {
                        props.dropdown.map((el, i)=> {
                            return (
                                <DropdownItem key={i} onClick = {()=>history.push(location.pathname+"?"+`category=${el}`)}>
                                    <div style={{fontSize: 20}}>
                                        {el}
                                    </div>
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
