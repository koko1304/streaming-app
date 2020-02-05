import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import myStreamReducer from "./myStreamReducer";

const reducers = combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer,
	myStreams: myStreamReducer
});

export default reducers;
