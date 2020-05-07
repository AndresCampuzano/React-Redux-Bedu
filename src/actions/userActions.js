import axios from 'axios';

export const bringAll = () => async (dispatch) => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	dispatch({
		type: 'bring_users',
		payload: response.data,
	});
};
