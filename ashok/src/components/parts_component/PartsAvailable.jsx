import React from 'react';
import '../../assets/css/parts_styles/parts.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import vehicleRegistration from '../vehicle_reg_component/VehicleRegistrationView';

export default class PartsAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
     
        <div>
          
          <div className="container sub-navbar bg-white">
            <Navbar color="light" expand="md"  className="sub-menu-parts">

              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar className="active">
                    <DropdownToggle nav caret>
                      Availability
                </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to="/partsAvailableSearch" className="nav-link"> Parts</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/partsAvailableSearchResult" className="nav-link"> Tyres</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/ordering">Ordering</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/bookingProgram">Booking Program</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/vehicleRegistration">Vehicle Registration Summary</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            
          </div>
        </div>
      
    );
  }
}