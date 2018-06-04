import React, { Component } from 'react';

import '../../assets/css/dashboard_styles/main.scss';
import { BrowserRouter as Router, Route, Link,NavLink  } from "react-router-dom";
import MainContainer from '../dashboard_component/MainContainer';
import Notifications from '../notifications_component/Notifications';
import LoginViews from '../login_component/LoginViews';
import PartsAvailable from '../parts_component/PartsAvailable';

import brandLogo from '../../assets/images/toyota.png';
import brandSubLogo from '../../assets/images/infostream.png';

import PartsAvailableSearchResult from '../parts_component/PartsAvailableSearchResult';
import PartsAvailableSearchFormView from '../parts_component/PartsAvailableSearchFormView';
import VehicleRegistrationView from '../vehicle_reg_component/VehicleRegistrationView';


import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem, Form, FormGroup
} from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			isLoggedIn: false,
			showWarning: true,
			collapse: false
		};
		this.toggleSearch = this.toggleSearch.bind(this);
	}

	toggleSearch() {
		this.setState({ collapse: !this.state.collapse });
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
					<div className="header">
						<div className="subheader">
							<div className="row">
								<div className="col-md-3">
									<h6>Good Morning Mike</h6>
								</div>
								<div className="col-md-9">
									<span className="float-right">
										<span>Don Valley North Toyota</span>
										<span className="myaccount-text">Toyota</span>
										<span className="myaccount-text"><Link to="/" className="nav-link">My Profile</Link></span>
									</span>
								</div>
							</div>
						</div>

						<Navbar color="lights" light expand="md">
							<Link activeClassName="active" to="/" className="navbar-brand">
								<div>
									<span className="first"><img src={brandLogo} alt="dummy" /></span>
									<span className="second"><img src={brandSubLogo} alt="dummy" /></span>
								</div>
							</Link>
							<NavbarToggler onClick={this.toggle} />
							<Collapse isOpen={this.state.isOpen} navbar>
								<Nav className="ml-auto" navbar>
									<NavItem>
										<NavLink exact  activeClassName="active" to="/" className="nav-link ">Home <span></span></NavLink>
									</NavItem>
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Sales
									</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												New
										</DropdownItem>
											<DropdownItem>
												Pre-owned
										</DropdownItem>
											<DropdownItem>
												Accessories
										</DropdownItem>
											<DropdownItem>
												Entune
										</DropdownItem>
											<DropdownItem>
												Business Office
										</DropdownItem>
											<DropdownItem>
												Incentives, Care and Tipes
										</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<NavItem>
										<NavLink activeClassName="active" to="/partsAvailableSearch" className="nav-link">Parts and service<span></span></NavLink>
									</NavItem>
									<NavItem>
										<NavLink to="/about" className="nav-link">Operations<span></span></NavLink>
									</NavItem>
									<NavItem>
										<NavLink   to="/login" className="nav-link">Staff<span></span></NavLink>
									</NavItem>
									<NavItem>
										<NavLink  to="/about" className="nav-link">News<span></span></NavLink>
									</NavItem>
									<NavItem className="icons">
										<Link to="/about" className="nav-link"><i className="fa fa-print"></i></Link>
									</NavItem>
									<NavItem className="icons" style={{ 'background': '#edf1f2' }}>
										<a onClick={this.toggleSearch} className="nav-link"><i className="fa fa-search"></i></a>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
						<Collapse isOpen={this.state.collapse}>
							<Form>
								<div className="container">
									<div className="row" style={{ 'paddingTop': '20px', 'background': '#edf1f2', 'paddingRight': '15px' }}>
										<div className="col-md-11">
											<FormGroup>
												<input type="text" className="form-control" placeholder="Keyboard Search" />
											</FormGroup>
										</div>
										<div className="col-md-1">
											<button className="btn btn-primary">Search</button>
										</div>
									</div>
								</div>
							</Form>
						</Collapse>
						<Notifications type="success" message="Your password will expire in 14 days, please change it now." />
					</div>
					<div className="container">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</div>
					<Route path="/login" component={LoginViews} />
				
					<Route path="/partsAvailableSearch" render={() => <PartsAvailableSearchFormView />} />
					<Route path="/vehicleRegistration" render={() => <VehicleRegistrationView />} />
            		<Route path="/partsAvailableSearchResult" render={() => <PartsAvailableSearchResult />} />
					
				</div>
			</Router>
		)
	}
}

export default Header;
const Home = () => (
	<div>
		<MainContainer />
	</div>
);
const About = () => (
	<div>
		<h2>About</h2>
		safdsadfdsaf asfdjdsafjsad
	</div>
);