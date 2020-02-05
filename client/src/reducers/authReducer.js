import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const authReducer = (auth = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case SIGN_IN:
			return { ...auth, isSignedIn: true, userId: actions.payload };
		case SIGN_OUT:
			return { ...auth, isSignedIn: false, userId: null };
		default:
			return auth;
	}
};

export default authReducer;
