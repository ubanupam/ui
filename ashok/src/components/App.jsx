import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';

import Header from './static_component/Header';
import Footer from './static_component/Footer';

import '../assets/css/app.scss';

export class App extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
