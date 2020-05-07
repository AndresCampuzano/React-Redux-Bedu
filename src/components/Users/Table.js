import React from 'react';
import { connect } from 'react-redux';

const Table = (props) => {
	const setRows = () => {
		return props.users.map((item) => (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.website}</td>
			</tr>
		));
	};

	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>{setRows()}</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.userReducer;
};

export default connect(mapStateToProps)(Table);
