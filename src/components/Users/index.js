import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';

import * as userActions from '../../actions/userActions';

class Users extends Component {
	componentDidMount() {
		this.props.bringAll();
	}

	setContent = () => {
		if (this.props.loading) {
			return <Spinner />;
		} else {
		}
		return (
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>{this.setRows()}</tbody>
			</table>
		);
	};

	setRows = () => {
		return this.props.users.map((item) => (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.website}</td>
			</tr>
		));
	};

	render() {
		return <div>{this.setContent()}</div>;
	}
}

const mapStateToProps = (reducers) => {
	return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Users);
