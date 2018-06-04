import React, { Component } from 'react';

import { Alert } from 'reactstrap';

class Notifications extends Component {

	constructor(props){
		super(props);
		this.state = {showWarning: true};
	}
	closeNotification() {
		console.log('close');
		this.setState({
			showWarning: !this.state.showWarning
		  });
	  }
	render(){
		return (
		<div className="notify-comp">
			<Alert color="primary">
				<i className="fa fa-warning mr-10"></i>{this.props.message}
				<span className="fa fa-close cursor-pointer float-right" onClick={this.closeNotification}><i className=""></i></span>
			  </Alert>
		</div>
		)
	}
}

export default Notifications;