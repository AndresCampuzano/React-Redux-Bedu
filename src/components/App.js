import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	async componentDidMount() {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		console.log('Respuesta: ', response.data);

		this.setState({
			users: response.data,
		});
	}

	setRows = () =>
		this.state.users.map((user) => (
			<tr key={user.id}>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.website}</td>
			</tr>
		));

	render() {
		// console.log(this.state.users);

		return (
			<div className='margin'>
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
			</div>
		);
	}
}

export default App;
