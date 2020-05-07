import axios from 'axios';
import { BRING_ALL, LOADING, ERROR } from '../types/userTypes';

export const bringAll = () => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		dispatch({
			type: BRING_ALL,
			payload: response.data,
		});
	} catch (error) {
		console.log('Error: ', error.message);
		dispatch({
			type: ERROR,
			payload: 'There is something wrong, please try again later.',
		});
	}
};
