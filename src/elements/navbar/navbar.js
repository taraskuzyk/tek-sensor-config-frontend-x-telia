import React, {useState} from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="#">Shards React</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink to="404" className="nav-link active">
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink1 to="#" disabled>
              Disabled
            </NavLink1>
          </NavItem>
          <Dropdown
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
          </Dropdown>
        </Nav>

        <Nav navbar className="ml-auto">
          <InputGroup size="sm" seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="border-0" placeholder="Search..." />
          </InputGroup>
        </Nav>
      </Collapse>
    </Navbar>
  );

}
