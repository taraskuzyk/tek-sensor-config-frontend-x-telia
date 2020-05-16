import React, {useState} from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '@/logo_tek.png'
import './navbar.scss'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLink1,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

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
      <NavbarBrand href="#">
        <img src={logo} alt="TEKTELIC" className="logo mr-3 mr-lg-5" />
        Sensor Converter Tool
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapseOpen} navbar className="justify-content-end mr-lg-2 mr-sm-0">
        <Nav navbar>
          <NavItem>
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink1 to="#" disabled>
              Disabled
            </NavLink1>
          </NavItem>
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
        </Nav>

        {/* <Nav navbar className="ml-2">
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
