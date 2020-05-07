// import { BRING_ALL, LOADING, ERROR } from '../types/userTypes';

const INITIAL_STATE = {
	posts: [],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
