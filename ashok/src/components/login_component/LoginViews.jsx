import React, { Component } from 'react';

import '../../assets/css/login_styles/login.scss';
{/*https://github.com/ReactTraining/react-router/issues/1982*/}
class LoginView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true
		};
	}
	render() {


		return (
			<div className="login-view container-fluid">

				<div className="row">
					<div className="col-md-4  offset-md-1 loginform-c">

						<div className="panel panel-info" >
							<div className="panel-heading">
								<div className="panel-title">Sign In</div>
							</div>

							<div style={{ 'paddingTop': '20px' }} className="panel-body" >


								<form id="loginform" className="form-horizontal">

									<div style={{ 'marginBottom': '10px' }} className="input-group">
										<label>User Id</label>
										<input id="login-username" type="text" className="form-control" name="username" value="" />
									</div>


									<div style={{ 'marginBottom': '10px' }} className="input-group">
										<label>Password</label>
										<input id="login-password" type="password" className="form-control" name="password" />
									</div>

									<div style={{ 'marginTop': '30px' }} className="form-group">
										<div className="controls">
											<button id="btn-login" className="btn btn-primary">Sign In  </button>
										</div>
									</div>

									<p>Having trouble signing in? Contact your dealership’s
								Infostream administrator at xxx-xxx-xxxx
								or email xxx@xxx.xx. </p>

								</form>
							</div>
						</div>

					</div>
					<div className="col-md-8">
					</div>


				</div>
			</div>
		)
	}
}

export default LoginView;
