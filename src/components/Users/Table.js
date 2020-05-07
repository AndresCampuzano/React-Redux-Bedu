import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = (props) => {
	const setRows = () => {
		return props.users.map((item, key) => (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.website}</td>
				<td>
					<Link to={`/posts/${key}`}>
						<div className='eye-solid icon'></div>
					</Link>
				</td>
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
