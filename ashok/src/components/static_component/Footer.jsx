import React, { Component } from 'react';

class Footer extends Component {

	render() {
		return (
			<div className="header footer">
				<div className="subheader subfooter">
					<div className="row ">
						<div className="col-md-3">
							<p>© 2018 Toyota Canada Inc.</p>
						</div>
						<div className="col-md-9">
							<span className="float-right">
								<span>Legal Terms & Conditions</span>
								<span className="myaccount-text">FAQ </span>
								<span className="myaccount-text">Site Map </span>
								<span className="myaccount-text">Contact Us</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;