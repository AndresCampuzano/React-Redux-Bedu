import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import * as userActions from '../../actions/userActions';

class Users extends Component {
	componentDidMount() {
		this.props.bringAll();
	}

	setContent = () => {
		if (this.props.loading) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <Fatal message={this.props.error} />;
		}
		return <Table />;
	};

	render() {
		return (
			<div>
				<h1>Users</h1>
				{this.setContent()}
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Users);
