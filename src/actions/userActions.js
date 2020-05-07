export const bringAll = () => (dispatch) => {
	dispatch({
		type: 'bring_users',
		payload: [1, 2, 3],
	});
};
