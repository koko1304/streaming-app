import axios from "axios";

import history from "../history";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, UPDATE_STREAM, DELETE_STREAM, FETCH_MYSTREAMS } from "./types";

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = formValues => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const res = await axios.post("http://localhost:3001/streams", { ...formValues, userId });

	dispatch({
		type: CREATE_STREAM,
		payload: res.data
	});

	history.push("/mystreams");
};

export const fetchStream = streamId => async dispatch => {
	const res = await axios.get(`http://localhost:3001/streams/${streamId}`);

	dispatch({
		type: FETCH_STREAM,
		payload: res.data
	});
};

export const fetchStreams = () => async dispatch => {
	const res = await axios.get("http://localhost:3001/streams");

	dispatch({
		type: FETCH_STREAMS,
		payload: res.data
	});
};

export const fetchMyStreams = () => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const res = await axios.get(`http://localhost:3001/streams?userId=${userId}`);

	dispatch({
		type: FETCH_MYSTREAMS,
		payload: res.data
	});
};

export const updateStream = (streamId, formValues) => async (dispatch, getState) => {
	const res = await axios.patch(`http://localhost:3001/streams/${streamId}`, formValues);

	dispatch({
		type: UPDATE_STREAM,
		payload: res.data
	});

	history.push("/mystreams");
};

export const deleteStream = streamId => async dispatch => {
	await axios.delete(`http://localhost:3001/streams/${streamId}`);

	dispatch({
		type: DELETE_STREAM,
		payload: streamId
	});

	history.push("/mystreams");
};
