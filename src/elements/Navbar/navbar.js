import React, {useState} from "react";
import logo from '../../logo_tek.png'
import './navbar.scss'

import {Collapse, Navbar, NavbarBrand, NavbarToggler} from "shards-react";

import {NavLink} from 'react-router-dom'

export default (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen)
  }


  return (
    <Navbar type="dark" theme="primary" expand="md" className="mb-4">
      <NavbarBrand
      tag={()=>
        {
          return (
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="TEKTELIC" className="logo mr-3 mr-lg-5" />
            Sensor Converter Tool
          </NavLink>
          )
        }
        }/>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapseOpen} navbar className="justify-content-end mr-lg-2 mr-sm-0">
        {/* <Nav Navbar>
          <NavItem>
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink1 to="#" disabled>
              Disabled
            </NavLink1>
          </NavItem> */}
          {/* <Dropdown
            open={dropdownOpen}
            toggle={toggleDropdown}
          >
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}


        {/* </Nav> */}

        {/* <Nav Navbar className="ml-2">
          <InputGroup size="sm" seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="border-0" placeholder="Search..." />
          </InputGroup>
        </Nav> */}
      </Collapse>
    </Navbar>
  );

}
