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

export default class VehicleRegistration extends React.Component {
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
      <Router>
        <div>
          <div className="container">
           registration
            
          </div>
        </div>
      	</Router>
    );
  }
}