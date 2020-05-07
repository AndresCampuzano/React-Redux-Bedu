import { BRING_ALL, LOADING, ERROR } from '../types/userTypes';

const INITIAL_STATE = {
	users: [],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BRING_ALL:
			return { ...state, users: action.payload, loading: false };

		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: action.payload, loading: false };

		default:
			return state;
	}
};
